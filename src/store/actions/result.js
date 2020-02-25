import * as actionTypes from "./actionTypes";

export const saveResult = res => {
  // const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

// async function
// для взаимодействия с сервером лучше использовать вот такие action creators (только вместо setTimeout отправлять http request)
// плюс к ним можно добавлять логику (но лучше в Reducer)
export const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = resElId => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId
  };
};
