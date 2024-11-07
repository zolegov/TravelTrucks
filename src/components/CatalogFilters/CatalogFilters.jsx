import css from "./CatalogFilters.module.css";

import Button from "../Button/Button";
import CatalogLocation from "../CatalogLocation/CatalogLocation";
import CatalogFilterParams from "../CatalogFilterParams/CatalogFilterParams";

const CatalogFilters = () => {
  return (
    <div className={css.catalogFilters}>
      <CatalogLocation />
      <CatalogFilterParams />
      <Button className={css.filterSearchBtn}>Search</Button>
    </div>
  );
};
export default CatalogFilters;
