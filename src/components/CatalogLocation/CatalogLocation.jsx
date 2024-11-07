import { BsMap } from "react-icons/bs";
import css from "./CatalogLocation.module.css";

const CatalogLocation = () => {
  return (
    <div className={css.locationWrapper}>
      <label className={css.locationTitle}>Location</label>
      <input
        type="text"
        placeholder="Kyiv, Ukraine"
        className={css.locationInput}
      />
      <BsMap className={css.locationMap} />
    </div>
  );
};
export default CatalogLocation;
