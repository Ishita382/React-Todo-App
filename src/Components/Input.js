import React from 'react';
import { styled } from '@mui/system';


const CustomInput=styled('input')`
    font-size:25px;
    width:550px;
    border: none;
    :focus{
      border:none;
   
  }
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
`;



function Input(props){
 
  return (
  <CustomInput  placeholder="What needs to be done?" value={props.value} onChange={props.change} onKeyPress={props.enter} disableUnderline = {true} />
  );
}




export default Input;