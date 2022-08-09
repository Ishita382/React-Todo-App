import { v4 as uuid } from "uuid";
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
} from "../actions/actionTypes";

const initialState = {
  all: [],
  mode: "all",
  newToDo: "",
  editToDo: "",
};
const action_id = uuid();
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        all: [
          ...state.all,
          {
            id: action_id,
            action: action.payload.value,
            done: false,
            isEdit: false,
          },
        ],
        newToDo: "",
      };

    case NEW_ITEM:
      return {
        ...state,
        newToDo: action.payload.value,
      };

    case EDIT_TODO_ITEM:
      return {
        ...state,
        editToDo: action.payload.value,
      };

    case TODOLIST:
      const temp =
        action.payload.completed < action.payload.list
          ? state.all.map((item) => (item = { ...item, done: true }))
          : state.all.map((item) => (item = { ...item, done: false }));
      return {
        ...state,
        all: temp,
      };
               
    case TOGGLE_ITEM:
      const toggle = state.all.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );
      return {
        ...state,
        all: toggle,
      };

    case EDIT:
      const editTodo = state.all.map((item) =>{
        return (
        item.id === action.payload.id
          ? { ...item, action: action.payload.editToDo, isEdit: false }
          : item
      ) } );
      return {
        ...state,
        all: editTodo,
        editToDo: "",
      };

    case REPLACE:
      const isEdit = state.all.map((item) =>
        item.id === action.payload.id ? { ...item, isEdit: !item.isEdit } : item
      );
      return {
        ...state,
        all: isEdit,
        editToDo: action.payload.value,
      };

    case DELETE:
      const filter = state.all.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        all: filter,
      };

    case FILTER:
      return {
        ...state,
        mode: action.payload.mode,
      };

    case CLEAR_COMPLETED:
      const filterarray = state.all.filter((item) => item.done === false);
      return {
        ...state,
        all: filterarray,
      };

    default:
      return state;
  }
};

export default todoReducers;
