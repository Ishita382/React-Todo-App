
import TodoItem from './TodoItem';
import Input from "./Input";
import Footer from "./Footer";
import Button from "./Button";
import { useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  
  addTodo,
  checkAll,
  toggleDone,
  edit,
  replace,
  deleteTodo,
  clear,
  newTodo,
  editTodo,
  clickFilter,
} from "../actions/index";

function TodoApp(){

   
    const initial = useSelector((state) => state.todoReducers);
    const { all, mode, newToDo, editToDo } = initial;
  
    //to dispatch action
    const dispatch = useDispatch();
  
    //giving filtered array
    const { listToMap, list, completed, active } = useMemo(() => {
      const activeArray = [...all].filter((item) => item.done === false);
      const completeArray = [...all].filter((item) => item.done === true);
  
      return {
        listToMap:
          mode === "active"
            ? activeArray
            : mode === "completed"
            ? completeArray
            : all,
        list: all.length,
        completed: completeArray.length,
        active: activeArray.length,
      };
    }, [mode, all]);
  
    //for adding todo
    const addItem = useCallback(
      (e, newToDo) => {
        e.key === "Enter" && dispatch(addTodo(newToDo));
      },
      [dispatch]
    );
  
    //for edit input
    const editItem = useCallback(
      (e, id, editToDo) => {
        e.key === "Enter" && dispatch(edit(id, editToDo));
      },
      [dispatch]
    );
  
    //to replace todo
    const replaceItem = useCallback(
      (id, action) => dispatch(replace(id, action)),
      [dispatch]
    );
  
    //to complete all todos
    const clickAll = useCallback(
      () => dispatch(checkAll(completed, list)),
      [dispatch, completed, list]
    );
  
    return (
      <Box>
        <h1>todos</h1>
        <div className="main">
        <div className="top">
          <Button countAll={list} checkAll={clickAll} />
          <Input 
            value={newToDo}
            change={(e) => dispatch(newTodo(e.target.value))}
            enter={(e) => addItem(e, newToDo)}
          />
        </div>
        {listToMap.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            toggle={() => dispatch(toggleDone(item.id))}
            editInput={() => replaceItem(item.id, item.action)}
            value={editToDo}
            change={(e) => dispatch(editTodo(e.target.value))}
            enter={(e) => editItem(e, item.id, editToDo)}
            delete={() => dispatch(deleteTodo(item.id))}
          />
        ))}
        {list > 0 && (
          <Footer
            left={active}
            completed={completed}
            click={(mode) => dispatch(clickFilter(mode))}
            clear={() => dispatch(clear())}
          />
        )}
        </div>
      </Box>
    );
  }
export default TodoApp;