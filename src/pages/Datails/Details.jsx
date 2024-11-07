import Container from "../../components/Container/Container";
import { FaStar } from "react-icons/fa";
import { BsMap } from "react-icons/bs";
import css from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCamper } from "../../trucks-api";
import DetailsTabs from "../../components/DetailsTabs/DetailsTabs";

const Details = () => {
  const { id } = useParams();
  const [truck, setTruck] = useState([]);
  console.log("truck: ", truck);
  useEffect(() => {
    async function fetchCamper() {
      try {
        const data = await getCamper(id);
        setTruck(data);
      } catch (error) {}
    }
    fetchCamper();
  }, []);
  return (
    <section className={css.detailsSection}>
      <Container>
        <div className={css.mainDetails}>
          <h3 className={css.detailsTitle}>{truck.name}</h3>
          <div className={css.rating}>
            <div className={css.reviews}>
              <FaStar className={css.starIcon} />
              <span className={css.ratingCount}>
                {/* {truck.rating}({truck.reviews.length} Reviews) */}
              </span>
            </div>
            <div className={css.infoLocation}>
              <BsMap className={css.infoLocationMap} />
              {truck.location}
            </div>
          </div>
          <div className={css.price}>
            <span>€</span>
            <span>{truck.price}.00</span>
          </div>
        </div>
        {truck.gallery && (
          <ul className={css.gallaryWrapper}>
            {truck.gallery.map((item, index) => (
              <li key={item.id || index} className={css.imgContainer}>
                <img src={item.thumb} alt={truck.name} />
              </li>
            ))}
          </ul>
        )}
        <p className={css.truckDecription}>{truck.description}</p>

        <DetailsTabs truck={truck} />
      </Container>
    </section>
  );
};
export default Details;
