import { useState } from "react";
import css from "./DetailsTabs.module.css";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const DetailsTabs = ({ truck }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className={css.tabsContainer}>
      <div className={css.tabsHeader}>
        <button
          className={`${css.tabButton} ${
            activeTab === "tab1" ? css.activeTab : ""
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Features
        </button>
        <button
          className={`${css.tabButton} ${
            activeTab === "tab2" ? css.activeTab : ""
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Reviews
        </button>
      </div>

      <div className={css.tabContent}>
        {activeTab === "tab1" && <Features truck={truck} />}
        {activeTab === "tab2" && <Reviews truck={truck} />}
      </div>
    </div>
  );
};

export default DetailsTabs;
