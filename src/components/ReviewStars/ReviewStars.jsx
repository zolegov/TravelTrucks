import { FaStar } from "react-icons/fa";
import css from "./ReviewStars.module.css";

const ReviewStars = ({ reviewerRating }) => {
  return (
    <div className={css.stars}>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < reviewerRating ? css.yellowStar : css.emptyStar}
        />
      ))}
    </div>
  );
};

export default ReviewStars;
