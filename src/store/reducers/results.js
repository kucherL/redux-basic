import * as actionTypes from "../actions/actions";

// хранилище, state
const initialState = {
  results: []
};

// извлекаем данные, передаваемые в dispatched, и обновляем state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // concat, в отличие от push, не меняет значение изначального массива, а возвращает новый
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};

export default reducer;
