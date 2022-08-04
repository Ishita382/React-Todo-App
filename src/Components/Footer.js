import React from "react";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const CustomizedButton= styled(Button)`
    color: #777;
    height:25px;
    margin:auto 0px;
    :focus{
        border:1px solid rgb(223, 173, 173);;
        border-radius: 3px;
    }
    font-size:16px;
    text-transform: lowercase;
    `;

    const ClearButton = styled(Button)`
    color: #404040;
    height:30px;
    margin:auto 2px auto auto;
    :hover{
    text-decoration: underline;}
    color: #777;
    font-size:16px;
    text-transform: lowercase;
    `;

    const CustomBox = styled(Box)`
    width:600px;
    height:60px;
    margin:  auto;
    right: 0;
    bottom: 0;
    left: 0;
    
    overflow: hidden;
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);
    display: flex;
    padding-left: 50px;
    background-color: white;
    width: 550px;
    `;

    const Items = styled('Box')`
    margin: 15px 0px auto -20px;
    color: #777;
    
    `

    const Buttons = styled('Button')`
    margin-left: 30px;
    border: none;
    background-color:white;
    margin-top: -5px;
    color: #777;
    `

function Footer(props){
        const {click, clear, completed, left} = props;
        
        return(
            <CustomBox>
            <Items>{left} {left===1?"item":"items"} left</Items>
            <Buttons>
            <CustomizedButton onClick={()=>{click("all")}} >All</CustomizedButton>
            <CustomizedButton onClick={()=>{click("active")}} >Active</CustomizedButton>
            <CustomizedButton onClick={()=>{click("completed")}} >Completed</CustomizedButton>
            </Buttons>
            {completed>0 && (<ClearButton onClick={clear}>
                Clear Completed</ClearButton>)}
             </CustomBox>
        );
    
}

export default Footer;
