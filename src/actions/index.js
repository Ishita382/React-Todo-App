import {
    ADD_ITEM,
    NEW_ITEM,
    EDIT_TODO_ITEM,
    TODOLIST,
    TOGGLE_ITEM,
    EDIT,
    REPLACE,
    DELETE,
    FILTER,
    CLEAR_COMPLETED,
  } from "./actionTypes";
  
  export const addTodo = (value) => {
    return {
      type: ADD_ITEM,
      payload: { value: value },
    };
  };
  
  export const newTodo = (value) => {
    return {
      type: NEW_ITEM,
      payload: { value: value },
    };
  };
  
  export const editTodo = (value) => {
    return {
      type: EDIT_TODO_ITEM,
      payload: { value: value },
    };
  };
  
  export const checkAll = (completed, list) => {
    return {
      type: TODOLIST,
      payload: { completed: completed, list: list },
    };
  };
  
  export const toggleDone = (id) => {
    return {
      type: TOGGLE_ITEM,
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
      type:CLEAR_COMPLETED,
    };
  };
