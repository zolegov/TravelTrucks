import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerContent}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
