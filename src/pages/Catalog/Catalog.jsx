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

// const Catalog = () => {
//   const dispatch = useDispatch();
//   const trucks = useSelector(selectTrucks);
//   const filters = useSelector(selectFilters);

//   // Мапінг для vehicleType з UI до сервера
//   const vehicleTypeMapping = {
//     Van: "panelTruck",
//     "Fully Integrated": "fullyIntegrated",
//     Alcove: "alcove",
//   };

//   // Перетворення фільтрів для сервера з використанням useMemo
//   const transformedFilters = useMemo(
//     () => ({
//       ...filters,
//       form: vehicleTypeMapping[filters.form] || filters.form,
//     }),
//     [filters, vehicleTypeMapping]
//   );

//   // Виконуємо запит лише коли змінюється transformedFilters
//   useEffect(() => {
//     console.log("Filters:", filters);
//     console.log("Transformed Filters:", transformedFilters);
//     dispatch(getCampers(transformedFilters));
//   }, [dispatch, transformedFilters]);

//   // Обробка пошуку з фільтрами
//   const handleSearch = () => {
//     dispatch(getCampers(transformedFilters));
//   };

//   return (
//     <section className={css.catalogSection}>
//       <Container>
//         <div className={css.wrapper}>
//           <CatalogFilters onSearch={handleSearch} />
//           <CatalogContent trucks={trucks} />
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Catalog;
// import { useEffect, useMemo } from "react";
// import { throttle } from "lodash";
// import { getCampers } from "../../redux/Campers/operations";
// import { useDispatch, useSelector } from "react-redux";
// import { selectTrucks } from "../../redux/Campers/selectors";
// import { selectFilters } from "../../redux/Filters/selectors";
import { throttle } from "lodash";
// Обгорнутий в throttle запит
const throttledGetCampers = throttle((dispatch, filters) => {
  dispatch(getCampers(filters));
}, 1000); // обмеження запитів до 1 разу за секунду

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
    // Перевіряємо, чи порожній масив результатів
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
