import BookCamper from "../BookCamper/BookCamper";
import css from "./Reviews.module.css";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <>
      <div className={css.reviewsWrapper}>
        <ul className={css.reviewsList}>
          <li className={css.reviewsListItem}>
            <div className={css.reviewsListItemName}>
              <span className={css.firstLetterBox}>A</span>
              <div className={css.reviewsNameWrapper}>
                <span>Alice</span>
                <span className={css.reviewsStars}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
            <p className={css.reviewsListItemText}>
              The Mavericks panel truck was a perfect choice for my solo road
              trip. Compact, easy to drive, and had all the essentials. The
              kitchen facilities were sufficient, and the overall experience was
              fantastic.
            </p>
          </li>
          <li className={css.reviewsListItem}>
            <div className={css.reviewsListItemName}>
              <span className={css.firstLetterBox}>B</span>
              <div className={css.reviewsNameWrapper}>
                <span>Bob</span>
                <span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
            <p className={css.reviewsListItemText}>
              A decent option for solo travel. The Mavericks provided a
              comfortable stay, but the lack of bathroom facilities was a
              drawback. Good for short trips where simplicity is preferred.
            </p>
          </li>
        </ul>
      </div>
      <div className={css.bookCamperWrapper}>
        <BookCamper />
      </div>
    </>
  );
};
export default Reviews;
