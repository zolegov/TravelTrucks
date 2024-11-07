import Button from "../Button/Button";
import css from "./CatalogContent.module.css";
import { FaStar } from "react-icons/fa";
import { BsMap } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ExpandableText from "../ExpandableText/ExpandableText";
import { useNavigate } from "react-router-dom";
import CarBadges from "../CarBadges/CarBadges";

const CatalogContent = ({ trucks }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div className={css.catalogContentWrapper}>
      <ul className={css.catalogContentList}>
        {trucks.map((truck) => (
          <li key={truck.id} className={css.catalogContentListItem}>
            <img src={truck.gallery[0].thumb} alt="" />
            <div className={css.catalogContentInfo}>
              <div className={css._InfoWrapper}>
                <div className={css.carInfo}>
                  <h3 className={css._InfoTitle}>{truck.name}</h3>
                  <div className={css._InfoText}>
                    <div>
                      <span>€</span>
                      <span className={css.price}>{truck.price}</span>
                    </div>
                    <FaRegHeart className={css.heartIcon} />
                  </div>
                </div>
                <div className={css.rating}>
                  <div>
                    <FaStar className={css.starIcon} />
                    <span className={css.ratingCount}>
                      {truck.rating}({truck.reviews.length} Reviews)
                    </span>
                  </div>
                  <div className={css.infoLocation}>
                    <BsMap className={css.infoLocationMap} />
                    {truck.location}
                  </div>
                </div>
              </div>
              <ExpandableText text={truck.description} />

              <CarBadges />
              <Button
                className={css.showMoreBtn}
                onClick={() => handleClick(truck.id)}
              >
                Show more
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CatalogContent;
