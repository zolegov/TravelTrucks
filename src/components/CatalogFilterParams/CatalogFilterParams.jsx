import {
  BsWind,
  BsDiagram3,
  BsCupHot,
  BsGrid,
  BsGrid1X2,
  BsGrid3X3Gap,
} from "react-icons/bs";
import { FaTv } from "react-icons/fa";
import { PiShower } from "react-icons/pi";
import css from "./CatalogFilterParams.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEquipment,
  selectVehicleType,
  setVehicleType,
  toggleEquipment,
} from "../../redux/Filters/filtersSlice";

const CatalogFilterParams = () => {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);
  const vehicleType = useSelector(selectVehicleType);

  const handleEquipmentToggle = (item) => {
    dispatch(toggleEquipment(item));
  };

  const handleVehicleTypeSelect = (type) => {
    dispatch(setVehicleType(type));
  };

  const isEquipmentSelected = (item) => equipment[item];
  const isVehicleTypeSelected = (type) => vehicleType === type;

  return (
    <div className={css.filtersWrapper}>
      <h3 className={css.filtersTitle}>Filters</h3>

      <div className={css.equipmentWrapper}>
        <h2 className={css.equipmentTitle}>Vehicle equipment</h2>
        <ul className={css.equipmentList}>
          {["AC", "Automatic", "Kitchen", "TV", "Bathroom"].map((item, idx) => (
            <li
              key={idx}
              className={`${css.equipmentListItem} ${
                isEquipmentSelected(item) ? css.selected : ""
              }`}
              onClick={() => handleEquipmentToggle(item)}
            >
              {getEquipmentIcon(item)} <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.equipmentWrapper}>
        <h2 className={css.typeTitle}>Vehicle type</h2>
        <ul className={css.typeList}>
          {["Van", "Fully Integrated", "Alcove"].map((type, idx) => (
            <li
              key={idx}
              className={`${css.typeListItem} ${
                isVehicleTypeSelected(type) ? css.selected : ""
              }`}
              onClick={() => handleVehicleTypeSelect(type)}
            >
              {getVehicleTypeIcon(type)} <span>{type}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const getVehicleTypeIcon = (type) => {
  switch (type) {
    case "Van":
      return <BsGrid1X2 />;
    case "Fully Integrated":
      return <BsGrid />;
    case "Alcove":
      return <BsGrid3X3Gap />;
    default:
      return null;
  }
};

const getEquipmentIcon = (item) => {
  switch (item) {
    case "AC":
      return <BsWind />;
    case "Automatic":
      return <BsDiagram3 />;
    case "Kitchen":
      return <BsCupHot />;
    case "TV":
      return <FaTv />;
    case "Bathroom":
      return <PiShower />;
    default:
      return null;
  }
};

export default CatalogFilterParams;
