import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { updateModalData, updateModalStatus } from "../../Store/Actions";
import avatar from "../../assets/avatar.png";
import "./ParentCard.css";
import Child from "../Child";

function ParentCard(props) {
  const { okrData } = props;
  const { filterValue = [] } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onClickHandler = (okr) => {
    dispatch(updateModalStatus(true));
    dispatch(updateModalData(okr));
  };

  return (
    <Fragment>
      <ol>
        {Object.keys(okrData).map((okr, keys) =>
          okrData[okr].id &&
          (filterValue.length === 0 ||
            filterValue.includes(okrData[okr].category)) ? (
            <details
              key={okrData[okr].id}
              open
              onClick={(e) => e.stopPropagation()}
              className="parent-container"
            >
              <summary>
                <div className="parent-title">
                  <img className="avatar" src={avatar} alt="avatar" />
                  <span
                    className="card-title"
                    onClick={() => onClickHandler(okrData[okr])}
                  >
                    {`${keys}.${okrData[okr].title}`}
                  </span>
                </div>
              </summary>

              <Child okrChildData={okrData[okr].children} />
            </details>
          ) : (
            ""
          )
        )}
      </ol>
    </Fragment>
  );
}

ParentCard.propTypes = {
  okrData: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    metric_name: PropTypes.string,
    metric_start: PropTypes.string,
    parent_objective_id: PropTypes.string,
    metric_target: PropTypes.string,
    archived: PropTypes.string,
    children: PropTypes.array,
  }),
  filterValue: PropTypes.array,
};

export default ParentCard;
