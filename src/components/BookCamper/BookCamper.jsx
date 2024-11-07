import FeedbackForm from "../FeedbackForm/FeedbackForm";
import css from "./BookCamper.module.css";
const BookCamper = () => {
  return (
    <div className={css.bookCamperInfo}>
      <h3 className={css.bookCamperTitle}>Book your campervan now</h3>
      <p className={css.bookCamperText}>
        Stay connected! We are always ready to help you.
      </p>
      <FeedbackForm />
    </div>
  );
};

export default BookCamper;
