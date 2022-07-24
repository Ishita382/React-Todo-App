import {
    ADD,
    NEW,
    EDIT_ITEM,
    ALL,
    TOGGLE,
    EDIT,
    REPLACE,
    DELETE,
    FILTER,
    CLEAR,
  } from "./actionTypes";
  
  export const addTodo = (value) => {
    return {
      type: ADD,
      payload: { value: value },
    };
  };
  
  export const newTodo = (value) => {
    return {
      type: NEW,
      payload: { value: value },
    };
  };
  
  export const editTodo = (value) => {
    return {
      type: EDIT_ITEM,
      payload: { value: value },
    };
  };
  
  export const checkAll = (completed, list) => {
    return {
      type: ALL,
      payload: { completed: completed, list: list },
    };
  };
  
  export const toggleDone = (id) => {
    return {
      type: TOGGLE,
      payload: { id: id },
    };
  };
  
  export const edit = (id, editToDo) => {
    return {
      type: EDIT,
      payload: { id: id, editToDo: editToDo },
    };
  };
  
  export const replace = (id, value) => {
    return {
      type: REPLACE,
      payload: { id: id, value: value },
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: DELETE,
      payload: { id: id },
    };
  };
  
  export const clickFilter = (mode) => {
    return {
      type: FILTER,
      payload: { mode: mode },
    };
  };
  
  export const clear = () => {
    return {
      type: CLEAR,
    };
  };