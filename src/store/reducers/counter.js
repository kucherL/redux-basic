import * as actionTypes from "../actions/actions";

// хранилище, state
const initialState = {
  counter: 0
};

// извлекаем данные, передаваемые в dispatched, и обновляем state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // возврат state с измененным значением (так мы возвращаем только counter, results теряется)
      // return { counter: state.counter + 1 };

      // immutable way для изменения state
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      // альтернативный способ immutable way для изменения state (здесь мы копируем старый state, перезаписываем counter, и оставляем нетронутым results)
      return { ...state, counter: state.counter - 1 };
    case actionTypes.ADD:
      return { ...state, counter: state.counter + action.val };
    case actionTypes.SUBTRACT:
      return { ...state, counter: state.counter - action.val };
  }
  return state;
};

export default reducer;