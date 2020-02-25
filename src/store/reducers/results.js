import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

// хранилище, state
const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

// извлекаем данные, передаваемые в dispatched, и обновляем state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // concat, в отличие от push, не меняет значение изначального массива, а возвращает новый
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2
        })
      });

    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }
  return state;
};

export default reducer;
