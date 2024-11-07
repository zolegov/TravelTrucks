import { BsWind } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { FaTv } from "react-icons/fa";
import { PiShower } from "react-icons/pi";
import { BsGrid } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { BsGrid3X3Gap } from "react-icons/bs";
import css from "./CatalogFilterParams.module.css";

const CatalogFilterParams = () => {
  return (
    <div className={css.filtersWrapper}>
      <h3 className={css.filtersTitle}>Filters</h3>
      <div className={css.equipmentWrapper}>
        <h2 className={css.equipmentTitle}>Vehicle equipment</h2>
        <ul className={css.equipmentList}>
          <li className={css.equipmentListItem}>
            <BsWind className={css.equipmentIcon} /> <span>AC</span>
          </li>
          <li className={css.equipmentListItem}>
            <BsDiagram3 className={css.equipmentIcon} />
            Automatic
          </li>
          <li className={css.equipmentListItem}>
            <BsCupHot className={css.equipmentIcon} />
            Kitchen
          </li>
          <li className={css.equipmentListItem}>
            <FaTv className={css.equipmentIcon} />
            TV
          </li>
          <li className={css.equipmentListItem}>
            <PiShower className={css.equipmentIcon} />
            Bathroom
          </li>
        </ul>
      </div>
      <div className={css.equipmentWrapper}>
        <h2 className={css.typeTitle}>Vehicle type</h2>
        <ul className={css.typeList}>
          <li className={css.typeListItem}>
            <BsGrid1X2 className={css.typeIcon} /> <span>Van</span>
          </li>
          <li className={css.typeListItem}>
            <BsGrid className={css.typeIcon} />
            Fully Integrated
          </li>
          <li className={css.typeListItem}>
            <BsGrid3X3Gap className={css.typeIcon} />
            Alcove
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CatalogFilterParams;
