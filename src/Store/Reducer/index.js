/**
 * Reducer will create and initial state and update the store values based on action type 
 */
import {
  UPDATE_OKR_DETAILS,
  UPDATE_OKR_CATEGORIES,
  UPDATE_FILTER,
  UPDATE_MODAL_DATA,
  UPDATE_MODAL_STATUS
} from "../constants";


/**
 * initialState is the initial state of the store 
 */

const initialState = {
  OkrDetails: {},
  categories: [],
  filterValue: [],
  ModelData: [],
  showModal: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_OKR_DETAILS:
      return {
        ...state,
        OkrDetails: action.payload,
      };
    case UPDATE_OKR_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case UPDATE_FILTER: {
      let currentFilterValue = [];
      if (state.filterValue.includes(action.payload)) {
        state.filterValue.splice(state.filterValue.indexOf(action.payload), 1);
        currentFilterValue = state.filterValue;
      } else {
        currentFilterValue = state.filterValue.concat(action.payload);
      }
      return {
        ...state,
        filterValue: currentFilterValue,
      };
    }
    case UPDATE_MODAL_DATA: {
      return {
        ...state,
        ModelData: action.payload,
      };
    }
    case UPDATE_MODAL_STATUS: {
      return {
        ...state,
        showModal: action.payload,
      };
    }
    default:
      return state;
  }
}
