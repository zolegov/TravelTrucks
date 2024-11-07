import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.avigationListItem, isActive && css.active);
};
const Navigation = () => {
  return (
    <nav className={css.avigationList}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
};
export default Navigation;
