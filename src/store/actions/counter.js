import * as actionTypes from './actionTypes';

// создаем action creator для асинхронных запросов (по договоренности, используются те же названия, что и в identifier, но в camel case)
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = value => {
  return {
    type: actionTypes.ADD,
    val: value
  };
};

export const subtract = value => {
  return {
    type: actionTypes.SUBTRACT,
    val: value
  };
};