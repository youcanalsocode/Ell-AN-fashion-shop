import React from "react";
import "../assets/style/Filters.css";

const Filters = ({ categories, onFilterChange }) => {
  return (
    <div className="filters">
      <h4>Filter by Category</h4>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
