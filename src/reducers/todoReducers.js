import { v4 as uuid } from "uuid";
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
} from "../actions/actionTypes";

const initialState = {
  all: [],
  mode: "all",
  newToDo: "",
  editToDo: "",
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        all: [
          ...state.all,
          {
            id: uuid(),
            action: action.payload.value,
            done: false,
            isEdit: false,
          },
        ],
        newToDo: "",
      };

    case NEW:
      return {
        ...state,
        newToDo: action.payload.value,
      };

    case EDIT_ITEM:
      return {
        ...state,
        editToDo: action.payload.value,
      };

    case ALL:
      const temp =
        action.payload.completed < action.payload.list
          ? state.all.map((item) => (item = { ...item, done: true }))
          : state.all.map((item) => (item = { ...item, done: false }));
      return {
        ...state,
        all: temp,
      };
               
    case TOGGLE:
      const toggle = state.all.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );
      return {
        ...state,
        all: toggle,
      };

    case EDIT:
      const edittodo = state.all.map((item) =>
        item.id === action.payload.id
          ? { ...item, action: action.payload.editToDo, isEdit: false }
          : item
      );
      return {
        ...state,
        all: edittodo,
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

    case CLEAR:
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