import React, { useState } from "react";

const ExpandableText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };
  const displayedText = isExpanded ? text : `${text.slice(0, 50)}`;
  return (
    <div>
      <p>
        {displayedText}
        {""}
        <span
          onClick={toggleExpanded}
          style={{ color: "blue", cursor: "pointer" }}
        >
          {isExpanded ? " hide" : " ..."}
        </span>
      </p>
    </div>
  );
};
export default ExpandableText;
