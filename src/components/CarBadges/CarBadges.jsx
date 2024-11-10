import {
  BsCupHot,
  BsWind,
  BsUiRadios,
  BsFuelPump,
  BsDiagram3,
} from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { PiShower } from "react-icons/pi";
import { LuMicrowave } from "react-icons/lu";
import css from "./CarBadges.module.css";

const CarBadges = ({ truck }) => {
  if (!truck) return null;
  return (
    <ul className={css.carBadges}>
      {truck.transmission === "automatic" && (
        <li className={css.carBadgesItem}>
          <BsDiagram3 className={css.carBadgesItemIcon} />
          Automatic
        </li>
      )}
      {truck.engine === "petrol" && (
        <li className={css.carBadgesItem}>
          <BsFuelPump className={css.carBadgesItemIcon} />
          Petrol
        </li>
      )}
      {truck.kitchen && (
        <li className={css.carBadgesItem}>
          <BsCupHot className={css.carBadgesItemIcon} />
          Kitchen
        </li>
      )}
      {truck.AC && (
        <li className={css.carBadgesItem}>
          <BsWind className={css.carBadgesItemIcon} />
          AC
        </li>
      )}
      {truck.TV && (
        <li className={css.carBadgesItem}>
          <FaTv className={css.carBadgesItemIcon} />
          {/* <img src={tv} alt="tv" className={css.carBadgesItemImg} /> */}
          TV
        </li>
      )}
      {truck.bathroom && (
        <li className={css.carBadgesItem}>
          <PiShower className={css.carBadgesItemIcon} />
          Bathroom
        </li>
      )}
      {truck.water && (
        <li className={css.carBadgesItem}>
          <IoWaterOutline className={css.carBadgesItemIcon} />
          Water
        </li>
      )}
      {truck.radio && (
        <li className={css.carBadgesItem}>
          <BsUiRadios className={css.carBadgesItemIcon} />
          Radio
        </li>
      )}
      {truck.microwave && (
        <li className={css.carBadgesItem}>
          <LuMicrowave className={css.carBadgesItemIcon} />
          Microwave
        </li>
      )}
    </ul>
  );
};

export default CarBadges;
