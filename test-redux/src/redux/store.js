import { createStore, combineReducers } from 'redux';

// Implement the actions addTodo, removeTodo, handleNewTodo, handleRemoveTodo

export const addTodo = () => {};

export const removeTodo = () => {};

const initialState = {
  todos: [],
};

const handleNewTodo = () => {};

const handleRemoveTodo = () => {};

const currentList = (state = initialState, action) => {
  const handlers = {
    REMOVE_TODO: handleRemoveTodo,
    ADD_TODO: handleNewTodo,
  };
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

const rootReducer = combineReducers({
  currentList,
});

export const store = createStore(rootReducer);
