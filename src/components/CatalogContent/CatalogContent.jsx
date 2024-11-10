import Button from "../Button/Button";
import css from "./CatalogContent.module.css";
import { FaStar } from "react-icons/fa";
import { BsMap } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ExpandableText from "../ExpandableText/ExpandableText";
import { useNavigate } from "react-router-dom";
import CarBadges from "../CarBadges/CarBadges";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  selecthasMore,
  selectisLoading,
} from "../../redux/Campers/selectors";
import { loadMore, toggleFavorite } from "../../redux/Campers/slice";
import { ColorRing } from "react-loader-spinner";

const CatalogContent = ({ trucks }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoading);
  const hasMore = useSelector(selecthasMore);
  const visibleItemsCount = useSelector(
    (state) => state.camper.visibleItemsCount
  );
  const favorites = useSelector(selectFavorites);

  const handleClick = (id) => {
    navigate(`/catalog/${id}`);
  };

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  const handleFavoriteClick = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={css.catalogContentWrapper}>
      <ul className={css.catalogContentList}>
        {trucks && trucks.length > 0 ? (
          trucks.slice(0, visibleItemsCount).map((truck) => (
            <li key={truck.id} className={css.catalogContentListItem}>
              <img src={truck.gallery[0].thumb} alt="" />
              <div className={css.catalogContentInfo}>
                <div className={css._InfoWrapper}>
                  <div className={css.carInfo}>
                    <h3 className={css._InfoTitle}>{truck.name}</h3>
                    <div className={css._InfoText}>
                      <div>
                        <span>€</span>
                        <span className={css.price}>{truck.price}.00</span>
                      </div>
                      {favorites[truck.id] ? (
                        <FaRegHeart
                          className={`${css.heartIcon} ${css.favoriteHeart}`}
                          onClick={() => handleFavoriteClick(truck.id)}
                        />
                      ) : (
                        <FaRegHeart
                          className={css.heartIcon}
                          onClick={() => handleFavoriteClick(truck.id)}
                        />
                      )}
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
                <CarBadges truck={truck} />
                <Button
                  className={css.showMoreBtn}
                  onClick={() => handleClick(truck.id)}
                >
                  Show more
                </Button>
              </div>
            </li>
          ))
        ) : (
          <p>Nothing was found for your request</p>
        )}
      </ul>
      {isLoading ? (
        <div className={css.loader}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{ margin: "0 auto" }}
            wrapperClass="color-ring-wrapper"
            colors={["red"]}
          />
        </div>
      ) : (
        trucks.length > 0 &&
        hasMore && (
          <Button className={css.loadMoreBtn} onClick={handleLoadMore}>
            Load more
          </Button>
        )
      )}
    </div>
  );
};

export default CatalogContent;
