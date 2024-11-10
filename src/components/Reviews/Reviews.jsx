import BookCamper from "../BookCamper/BookCamper";
import ReviewStars from "../ReviewStars/ReviewStars";
import css from "./Reviews.module.css";

const Reviews = ({ truck }) => {
  return (
    <>
      <div className={css.reviewsWrapper}>
        <ul className={css.reviewsList}>
          {truck.reviews.map((item, index) => (
            <li key={index} className={css.reviewsListItem}>
              <div className={css.reviewsListItemName}>
                <span className={css.firstLetterBox}>A</span>
                <div className={css.reviewsNameWrapper}>
                  <span>{item.reviewer_name}</span>
                  <span className={css.reviewsStars}>
                    <ReviewStars reviewerRating={item.reviewer_rating} />
                  </span>
                </div>
              </div>
              <p className={css.reviewsListItemText}>{item.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.bookCamperWrapper}>
        <BookCamper />
      </div>
    </>
  );
};
export default Reviews;
