import { Formik, Form, Field } from "formik";
import Button from "../Button/Button";
import css from "./FeedbackForm.module.css";
import emailjs from "emailjs-com";

import FlatpickrDate from "../FlatpickrDate/FlatpickrDate";
const FeedbackForm = () => {
  const sendEmail = (values) => {
    const { username, email, date, message } = values;

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
        (result) => {},
        (error) => {}
      );
  };
  return (
    <Formik
      initialValues={{ username: "", email: "", date: null, message: "" }}
      onSubmit={(values, { resetForm }) => {
        sendEmail(values);
        resetForm();
        console.log("Submitted values:", values);
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
