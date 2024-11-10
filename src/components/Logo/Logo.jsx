import { useNavigate } from "react-router-dom";
import css from "../Logo/Logo.module.css";
const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <div className={css.headerLogo} onClick={handleClick}>
      <span className={css.logoTravel}>Travel</span>
      <span className={css.logoTrucks}>Trucks</span>
    </div>
  );
};

export default Logo;
