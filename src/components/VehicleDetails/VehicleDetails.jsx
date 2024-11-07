import css from "./VehicleDetails.module.css";
const VehicleDetails = ({ truck }) => {
  return (
    <div className={css.vehicleDetailsWrapper}>
      <h3 className={css.vehicleDetailsTitle}>Vehicle details</h3>
      <ul className={css.vehicleDetailsList}>
        <li className={css.vehicleDetailsListItem}>
          <span>Form</span>
          <span>{truck.form}</span>
        </li>
        <li className={css.vehicleDetailsListItem}>
          <span>Length</span>
          <span>{truck.length}</span>
        </li>
        <li className={css.vehicleDetailsListItem}>
          <span>Width</span>
          <span>{truck.width}</span>
        </li>
        <li className={css.vehicleDetailsListItem}>
          <span>Height</span>
          <span>{truck.height}</span>
        </li>
        <li className={css.vehicleDetailsListItem}>
          <span>Tank</span>
          <span>{truck.tank}</span>
        </li>
        <li className={css.vehicleDetailsListItem}>
          <span>Consumption</span>
          <span> {truck.consumption}</span>
        </li>
      </ul>
    </div>
  );
};
export default VehicleDetails;
