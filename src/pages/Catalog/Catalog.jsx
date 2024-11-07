import { useEffect, useState } from "react";
import { getCampers } from "../../trucks-api";
import CatalogContent from "../../components/CatalogContent/CatalogContent";
import CatalogFilters from "../../components/CatalogFilters/catalogFilters";
import Container from "../../components/Container/Container";
import css from "./Catalog.module.css";
const Catalog = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    async function fetchCampers() {
      try {
        const data = await getCampers();
        setTrucks(data.items);
        console.log("catalog", data.items);
      } catch (error) {}
    }
    fetchCampers();
  }, []);

  return (
    <section className={css.catalogSection}>
      <Container>
        <div className={css.wrapper}>
          <CatalogFilters />
          <CatalogContent trucks={trucks} />
        </div>
      </Container>
    </section>
  );
};
export default Catalog;
