import { BsWind } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import css from "./CarBadges.module.css";

const CarBadges = ({ truck }) => {
  console.log("truck2: ", truck);
  if (!truck) return null;
  return (
    <ul className={css.carBadges}>
      <li className={css.carBadgesItem}>
        <BsDiagram3 className={css.carBadgesItemIcon} />
        Automatic
      </li>
      <li className={css.carBadgesItem}>
        <BsFuelPump className={css.carBadgesItemIcon} />
        Petrol
      </li>
      <li className={css.carBadgesItem}>
        <BsCupHot className={css.carBadgesItemIcon} />
        Kitchen
      </li>
      <li className={css.carBadgesItem}>
        <BsWind className={css.carBadgesItemIcon} />
        AC
      </li>
    </ul>
  );
};

export default CarBadges;
