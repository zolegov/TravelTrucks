import { useState, useEffect, useRef } from "react";
import { BsMap } from "react-icons/bs";
import css from "./CatalogLocation.module.css";
import { locations } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation, setLocation } from "../../redux/Filters/filtersSlice";

const CatalogLocation = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      dispatch(setLocation(savedLocation));
      setSuggestions(locations);
    } else {
      setSuggestions(locations);
    }
  }, [dispatch]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setLocation(value));

    if (value) {
      const filteredLocations = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredLocations);
      setDropdownVisible(true);
    } else {
      setSuggestions(locations);
      setDropdownVisible(true);
    }
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (suggestion) => {
    dispatch(setLocation(suggestion));
    localStorage.setItem("location", suggestion);
    setDropdownVisible(false);
  };

  const handleFocus = () => {
    setDropdownVisible(true);
    if (!location) {
      setSuggestions(locations);
    }
  };

  return (
    <div className={css.locationWrapper}>
      <label className={css.locationTitle}>Location</label>
      <input
        type="text"
        placeholder="Kyiv, Ukraine"
        className={css.locationInput}
        value={location}
        onChange={handleInputChange}
        onFocus={handleFocus}
        ref={inputRef}
      />
      <BsMap className={css.locationMap} />

      {isDropdownVisible && suggestions.length > 0 && (
        <ul className={css.dropdown}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={css.dropdownItem}
              onMouseDown={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CatalogLocation;
