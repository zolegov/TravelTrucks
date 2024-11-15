import { useSelector } from "react-redux";
import Button from "../Button/Button";
import CatalogLocation from "../CatalogLocation/CatalogLocation";
import CatalogFilterParams from "../CatalogFilterParams/CatalogFilterParams";
import css from "./CatalogFilters.module.css";
import { selectFilters } from "../../redux/Filters/selectors";

const CatalogFilters = ({ onSearch, onReset }) => {
  const filters = useSelector(selectFilters);

  const handleSearchClick = () => {
    onSearch(filters);
  };

  return (
    <div className={css.catalogFilters}>
      <CatalogLocation />
      <CatalogFilterParams />
      <Button className={css.filterSearchBtn} onClick={handleSearchClick}>
        Search
      </Button>
      <Button className={css.filterSearchBtn} onClick={onReset}>
        Reset
      </Button>
    </div>
  );
};

export default CatalogFilters;
