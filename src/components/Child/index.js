import React from "react";
import { useDispatch } from "react-redux";
import { updateModalData, updateModalStatus } from "../../Store/Actions";
import PropTypes from 'prop-types';
import avatar from "../../assets/avatar.png";
import "./Child.css";

function Child(props) {
  const { okrChildData = [] } = props;
  const dispatch = useDispatch();
  const onClickHandler = (event, okr) => {
    event.stopPropagation();
    dispatch(updateModalStatus(true));
    dispatch(updateModalData(okr));
  };

  return (
    <ol className="okr-child-container">
      {okrChildData &&
        okrChildData.length > 0 &&
        okrChildData.map((okrChild) => (
          <div className="child-container">
            <img className="avatar" src={avatar} alt="avatar" />
            <li
              className="child-content"
              key={okrChild.id}
              onClick={(e) => onClickHandler(e, okrChild)}
            >
              <span>{okrChild.title}</span>
            </li>
          </div>
        ))}
    </ol>
  );
}

Child.propTypes = {
  okrChildData: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    metric_name: PropTypes.string,
    metric_start: PropTypes.string,
    parent_objective_id: PropTypes.string,
    metric_target: PropTypes.string,
    archived: PropTypes.string
  }),
};

export default Child;
