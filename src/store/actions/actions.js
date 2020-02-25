export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// создаем action creator для асинхронных запросов (по договоренности, используются те же названия, что и в identifier, но в camel case)
// export const increment = () => {
//   return {
//     type: INCREMENT
//   }
// };