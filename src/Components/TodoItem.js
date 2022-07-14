import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Input from "@mui/material/Input";
import { styled } from '@mui/material/styles';
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Button from "@mui/material/Button";

const CustomizedBox = styled(Box)`
  display: flex;
  margin: auto;
  border:none;
  width: 600px;
  :hover {
    .delete {
      display: initial;
    }
  }
 padding-right: 40px;
 border-bottom: 1px solid #E5E8EA;
`;

const TickCircle = styled(CheckCircleOutlinedIcon)`
  color: green;
  font-size: 30px;
`;

const Circle = styled(CircleOutlinedIcon)`
  color: #E5E8EA;
  font-size: 30px;
  :focus{
    color: #E5E8EA;
  }
`;

const CustommInput = styled(Input)`
  font-size: 25px;
  width: 550px;
  padding: 10px;
  margin-left: 45px;
  
`;

const List = styled(Box)`
  font-size: 25px;
  padding: 15px 0px;
  color: rgb(105, 105, 105);
  width: 500px;
`;

const Delete = styled(Button)`
  color: rgba(175, 47, 47);
  margin: auto 10px auto auto;
  display: none;
`;

function TodoItem(props){
  
      return (
        <CustomizedBox>
        {!props.todo.isEdit && (
          <Button onClick={() => props.toggle(props.todo)}>
            {props.todo.done ? <TickCircle /> : <Circle />}
          </Button>
        )}
        {props.todo.isEdit ? (
          <CustommInput
            type="text"
            disableUnderline={true}
            value={props.value}
            onChange={props.change}
            onKeyPress={(e) => props.enter(e, props.todo.id)}
          />
        ) : (
          <List
            sx={{ textDecoration: props.todo.done ? "line-through" : "none" }}
            onDoubleClick={() => props.editInput(props.todo)}
          >
            {props.todo.action}
          </List>
        )}
        {!props.todo.isEdit && (
          <Delete className="delete" onClick={() => props.delete(props.todo)}>
            <CloseIcon />
          </Delete>
        )}
      </CustomizedBox>
      );
    
  }
  export default TodoItem;