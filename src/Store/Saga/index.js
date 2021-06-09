/**
 * saga will keep watching all the action type and execute the generator function 
 * 
 */

import { takeEvery, call, put } from "redux-saga/effects";
import { GET_OKR_DETAILS } from "../constants";
import { updateOkrDetails, updateOkrCategories } from "../Actions";

function* getDetails() {
  const getDetails = yield call(
    fetch,
    "https://okrcentral.github.io/sample-okrs/db.json"
  );
  const responseBody = yield getDetails.json();

  const { data } = responseBody;
  let processData = {};
  let categoryList = [];
  let category = {};
  data.forEach((okrs) => {
    if (okrs.parent_objective_id) {
      if (
        processData[okrs.parent_objective_id] &&
        processData[okrs.parent_objective_id]["children"]
      ) {
        processData[okrs.parent_objective_id]["children"].push(okrs);
      } else {
        if (!processData[okrs.parent_objective_id]) {
          processData[okrs.parent_objective_id] = {};
        }
        processData[okrs.parent_objective_id]["children"] = [];
        processData[okrs.parent_objective_id]["children"].push(okrs);
      }
    } else {
      processData[okrs.id] = {
        ...okrs,
        ...processData[okrs.id],
      };
      if (!category[okrs.category]) {
        category[okrs.category] = okrs.category;
        categoryList.push(okrs.category);
      }
    }
  });

  yield put(updateOkrDetails(processData));
  yield put(updateOkrCategories(categoryList));
}

export default function* rootSaga() {
  yield takeEvery(GET_OKR_DETAILS, getDetails);
}
