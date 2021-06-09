import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getOkrDetails, updateModalStatus } from "../../Store/Actions";
import FilterChips from "../FilterChips";
import ParentCard from "../ParentCard";
import Modal from "../Modal";
import "./OkrView.css";

function OKrView() {
  const { OkrDetails, showModal, ModelData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOkrDetails());
  }, [dispatch]);
  return (
    <div className="view-container">
      <FilterChips />
      <ParentCard okrData={OkrDetails} />
      {showModal && (
        <Modal
          header={ModelData.title}
          updateModalState={() => dispatch(updateModalStatus(false))}
        >
          {ModelData.id && (
            <p>
              <b>ID:</b> {ModelData.id}
            </p>
          )}
          {ModelData.category && (
            <p>
              <b>Category: </b>
              {ModelData.category}
            </p>
          )}
          {ModelData.metric_name && (
            <p>
              <b>Metric Name :</b>
              {ModelData.metric_name}
            </p>
          )}
          {ModelData.metric_start && (
            <p>
              <b>Metric Start:</b> {ModelData.metric_start}
            </p>
          )}
          {ModelData.metric_target && (
            <p>
              <b>Metric Target:</b> {ModelData.metric_target}
            </p>
          )}
          {ModelData.parent_objective_id && (
            <p>
              <b>Parent Objective ID:</b> {ModelData.parent_objective_id}
            </p>
          )}
          {ModelData.archived && (
            <p>
              <b>Archived:</b> {ModelData.archived}`}
            </p>
          )}
        </Modal>
      )}
    </div>
  );
}

OKrView.propTypes = {
  OkrDetails: PropTypes.shape({
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
  showModal: PropTypes.bool,
  ModelData: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    metric_name: PropTypes.string,
    metric_start: PropTypes.string,
    parent_objective_id: PropTypes.string,
    metric_target: PropTypes.string,
    archived: PropTypes.string,
  }),
};

export default OKrView;
