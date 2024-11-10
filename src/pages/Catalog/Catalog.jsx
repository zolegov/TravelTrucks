import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogContent from "../../components/CatalogContent/CatalogContent";
import CatalogFilters from "../../components/CatalogFilters/CatalogFilters.jsx";
import Container from "../../components/Container/Container";
import css from "./Catalog.module.css";
import { getCampers } from "../../redux/Campers/operations";
import { selectTrucks } from "../../redux/Campers/selectors.js";
import { selectFilters } from "../../redux/Filters/selectors.js";
import { clearTrucks } from "../../redux/Campers/slice";

import { throttle } from "lodash";

const throttledGetCampers = throttle((dispatch, filters) => {
  dispatch(getCampers(filters));
}, 1000);

const Catalog = () => {
  const dispatch = useDispatch();
  const trucks = useSelector(selectTrucks);
  const filters = useSelector(selectFilters);

  const vehicleTypeMapping = {
    Van: "panelTruck",
    "Fully Integrated": "fullyIntegrated",
    Alcove: "alcove",
  };

  const transformedFilters = useMemo(
    () => ({
      ...filters,
      form: vehicleTypeMapping[filters.form] || filters.form,
    }),
    [filters]
  );

  useEffect(() => {
    throttledGetCampers(dispatch, transformedFilters);
  }, [dispatch]);

  const handleSearch = async () => {
    dispatch(clearTrucks());
    const result = await dispatch(getCampers(transformedFilters));

    if (result.payload.length === 0) {
      iziToast.warning({
        position: "topCenter",
        title: "Warning",
        message: "Not found",
      });
    }
  };

  return (
    <section className={css.catalogSection}>
      <Container>
        <div className={css.wrapper}>
          <CatalogFilters onSearch={handleSearch} />
          <CatalogContent trucks={trucks} />
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
