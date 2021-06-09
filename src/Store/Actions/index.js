/**
 * Action trigger action Type based on user interaction and Mutate the store value 
 */

import {
  GET_OKR_DETAILS,
  UPDATE_OKR_DETAILS,
  UPDATE_OKR_CATEGORIES,
  UPDATE_FILTER,
  UPDATE_MODAL_DATA,
  UPDATE_MODAL_STATUS
} from "../constants";

export const getOkrDetails = () => {
  return {
    type: GET_OKR_DETAILS,
  };
};

export const updateOkrDetails = (payload) => {
  return {
    type: UPDATE_OKR_DETAILS,
    payload,
  };
};

export const updateOkrCategories = (payload) => {
  return {
    type: UPDATE_OKR_CATEGORIES,
    payload,
  };
};

export const updateFilter = (payload) => {
  return {
    type: UPDATE_FILTER,
    payload,
  };
};

export const updateModalData = (payload) => {
  return {
    type: UPDATE_MODAL_DATA,
    payload,
  };
};

export const updateModalStatus = (payload) => {
  return {
    type: UPDATE_MODAL_STATUS,
    payload,
  };
}
