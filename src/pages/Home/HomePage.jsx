import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import css from "./HomePage.module.css";
const HomePage = () => {
  const navigate = useNavigate();
  const headleClick = () => {
    navigate("/catalog");
  };
  return (
    <section className={css.homeSectionBg}>
      <Container>
        <div className={css.homeSectionWrapper}>
          <div className={css.homeSectionContent}>
            <div className={css.homeSectionInfo}>
              <h1 className={css.homeSectionTitle}>Campers of your dreams</h1>
              <p className={css.homeSectionText}>
                You can find everything you want in our catalog
              </p>
            </div>

            <Button onClick={headleClick}>View Now</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
