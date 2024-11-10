// import { useState, useEffect, useRef } from "react";
// import { BsMap } from "react-icons/bs";
// import css from "./CatalogLocation.module.css";
// import { locations } from "../../constants/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { selectLocation, setLocation } from "../../redux/Filters/filtersSlice";

// const CatalogLocation = () => {
//   const dispatch = useDispatch();
//   const location = useSelector(selectLocation);
//   const [suggestions, setSuggestions] = useState([]);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const inputRef = useRef(null); // для управління кліканнями за межами input

//   // Обробка зміни значення в input
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     dispatch(setLocation(value)); // Встановлюємо локацію через Redux

//     if (value) {
//       const filteredLocations = locations.filter((loc) =>
//         loc.toLowerCase().includes(value.toLowerCase())
//       );
//       setSuggestions(filteredLocations);
//       setDropdownVisible(true); // Показуємо список, коли є введений текст
//     } else {
//       setSuggestions(locations); // Якщо текст порожній, показуємо всі локації
//       setDropdownVisible(true); // Відображаємо список
//     }
//   };

//   // Закриваємо список при натисканні поза межами input
//   const handleClickOutside = (e) => {
//     if (inputRef.current && !inputRef.current.contains(e.target)) {
//       setDropdownVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Обробка кліку на елемент списку
//   const handleSuggestionClick = (suggestion) => {
//     dispatch(setLocation(suggestion)); // Встановлюємо вибрану локацію через Redux
//     setDropdownVisible(false); // Приховуємо список після вибору
//   };

//   // Обробка фокусу на input
//   const handleFocus = () => {
//     setDropdownVisible(true); // Показуємо список при фокусуванні
//     if (!location) {
//       setSuggestions(locations); // Якщо немає введеного тексту, показуємо всі локації
//     }
//   };

//   return (
//     <div className={css.locationWrapper}>
//       <label className={css.locationTitle}>Location</label>
//       <input
//         type="text"
//         placeholder="Kyiv, Ukraine"
//         className={css.locationInput}
//         value={location}
//         onChange={handleInputChange}
//         onFocus={handleFocus}
//         ref={inputRef}
//       />
//       <BsMap className={css.locationMap} />

//       {isDropdownVisible && suggestions.length > 0 && (
//         <ul className={css.dropdown}>
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               className={css.dropdownItem}
//               onMouseDown={() => handleSuggestionClick(suggestion)}
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CatalogLocation;
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

  const inputRef = useRef(null); // для управління кліканнями за межами input

  // Завантажуємо з localStorage при монтуванні компонента
  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      dispatch(setLocation(savedLocation)); // Встановлюємо локацію з localStorage в Redux
      setSuggestions(locations); // Показуємо всі локації, якщо є значення в localStorage
    } else {
      setSuggestions(locations); // Показуємо всі локації, якщо нічого немає в localStorage
    }
  }, [dispatch]);

  // Обробка зміни значення в input
  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setLocation(value)); // Встановлюємо локацію через Redux

    if (value) {
      const filteredLocations = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredLocations);
      setDropdownVisible(true); // Показуємо список, коли є введений текст
    } else {
      setSuggestions(locations); // Якщо текст порожній, показуємо всі локації
      setDropdownVisible(true); // Відображаємо список
    }
  };

  // Закриваємо список при натисканні поза межами input
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

  // Обробка кліку на елемент списку
  const handleSuggestionClick = (suggestion) => {
    dispatch(setLocation(suggestion)); // Встановлюємо вибрану локацію через Redux
    localStorage.setItem("location", suggestion); // Зберігаємо вибрану локацію в localStorage
    setDropdownVisible(false); // Приховуємо список після вибору
  };

  // Обробка фокусу на input
  const handleFocus = () => {
    setDropdownVisible(true); // Показуємо список при фокусуванні
    if (!location) {
      setSuggestions(locations); // Якщо немає введеного тексту, показуємо всі локації
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
        onFocus={handleFocus} // Показуємо список при фокусуванні
        ref={inputRef} // Додаємо ref для управління поза межами
      />
      <BsMap className={css.locationMap} />

      {isDropdownVisible && suggestions.length > 0 && (
        <ul className={css.dropdown}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={css.dropdownItem}
              onMouseDown={() => handleSuggestionClick(suggestion)} // Вибір локації зі списку
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
