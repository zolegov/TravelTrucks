import { Formik, Form, Field } from "formik";
import Button from "../Button/Button";
import css from "./FeedbackForm.module.css";
import emailjs from "emailjs-com";
import FlatpickrDate from "../FlatpickrDate/FlatpickrDate";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const FeedbackForm = () => {
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
    emailjs
      .send(
        "service_8dy41en",
        "template_s9u5mwa",
        {
          username,
          email,
          date: date ? date.toLocaleDateString() : "",
          message,
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
  return (
    <Formik
      initialValues={{ username: "", email: "", date: null, message: "" }}
      onSubmit={(values, { resetForm }) => {
        sendEmail(values);
        resetForm();
      }}
    >
      {() => (
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
      )}
    </Formik>
  );
};

export default FeedbackForm;
