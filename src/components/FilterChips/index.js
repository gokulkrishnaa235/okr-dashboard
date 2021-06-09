import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { updateFilter } from "../../Store/Actions";
import "./FilterChips.css";

function FilterChips() {
  const { categories, filterValue } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h2 className="filter-text">{`Filter Tags (${filterValue.length})`}</h2>
      <div className="chip-container">
        {categories.map((filter) => (
          <div
            key={filter}
            onClick={() => dispatch(updateFilter(filter))}
            className={`chips ${
              filterValue.includes(filter) ? "selected" : ""
            } `}
          >
            {filter}
          </div>
        ))}
      </div>
    </Fragment>
  );
}

FilterChips.propTypes = {
  categories: PropTypes.array,
  filterValue: PropTypes.array,
};

export default FilterChips;
