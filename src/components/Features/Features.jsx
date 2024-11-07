import BookCamper from "../BookCamper/BookCamper";
import CarBadges from "../CarBadges/CarBadges";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import css from "./Features.module.css";

const Features = ({ truck }) => {
  if (!truck) return null;
  return (
    <>
      <div className={css.vehicleDetailsWrapper}>
        {truck && <CarBadges truck={truck} />}

        <VehicleDetails truck={truck} />
      </div>
      <div className={css.bookCamperWrapper}>
        <BookCamper />
      </div>
    </>
  );
};

export default Features;
