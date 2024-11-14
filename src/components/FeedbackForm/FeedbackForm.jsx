import { Formik, Form, Field } from "formik";
import Button from "../Button/Button";
import css from "./FeedbackForm.module.css";
import emailjs from "emailjs-com";
import FlatpickrDate from "../FlatpickrDate/FlatpickrDate";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { useEffect, useState } from "react";

const getFromLocalStorage = () => {
  const savedValues = localStorage.getItem("feedbackFormData");
  return savedValues
    ? JSON.parse(savedValues)
    : { username: "", email: "", date: null, message: "" };
};

// Функція для збереження даних форми в localStorage
const saveToLocalStorage = (values) => {
  localStorage.setItem("feedbackFormData", JSON.stringify(values));
};

const FeedbackForm = () => {
  const initialValues = getFromLocalStorage();
  // Завантаження значень з localStorage, якщо вони є
  useEffect(() => {
    const savedValues = localStorage.getItem("feedbackFormData");
    if (savedValues) {
      // Якщо значення є, оновлюємо початкові значення форми
      const parsedValues = JSON.parse(savedValues);
      initialValues.username = parsedValues.username || "";
      initialValues.email = parsedValues.email || "";
      initialValues.date = parsedValues.date || null;
      initialValues.message = parsedValues.message || "";
    }
  }, []);
  console.log("initialValues: ", initialValues);

  const sendEmail = (values) => {
    const { username, email, date, message } = values;
    if (!username || !email || !date) {
      iziToast.warning({
        position: "topCenter",
        title: "Warning",
        message: "Please fill in all required fields.",
      });
      return;
    }
    iziToast.info({
      position: "topCenter",
      title: "Sending",
      message: "Your message is being sent...",
      timeout: 2000,
    });
    const formattedDate = date instanceof Date ? date.toLocaleDateString() : "";
    emailjs
      .send(
        "service_8dy41en",
        "template_s9u5mwa",
        {
          to_name: "TravelTrucks",
          from_name: username,
          email: email,
          date: formattedDate,
          message: message,
        },
        "Zh922BmzL0XTgdg2W"
      )
      .then(
        (result) => {
          iziToast.success({
            position: "topCenter",
            title: "Success",
            message: "Your message has been sent successfully!",
          });
        },
        (error) => {
          iziToast.error({
            position: "topCenter",
            title: "Error",
            message: "There was an error sending your message.",
          });
        }
      );
  };
  const handleChange = (values) => {
    saveToLocalStorage(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted:", values);
        sendEmail(values);
        localStorage.removeItem("feedbackFormData");
        resetForm();
      }}
      onChange={handleChange}
    >
      {({ values }) => {
        useEffect(() => {
          localStorage.setItem("feedbackFormData", JSON.stringify(values));
        }, [values]);

        return (
          <Form className={css.feedbackForm}>
            <Field
              type="text"
              name="username"
              className={css.feedbackFormField}
              placeholder="Name*"
            />
            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={css.feedbackFormField}
            />
            <Field
              type="date"
              name="date"
              className={css.feedbackFormField}
              id="flatpickr"
              component={FlatpickrDate}
            />
            <Field
              as="textarea"
              name="message"
              className={css.feedbackFormTextarea}
              placeholder="Comment"
            />
            <Button className={css.sendBtn}>Send</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FeedbackForm;
