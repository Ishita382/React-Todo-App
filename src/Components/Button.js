import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";


const CustomButton = styled(Button)`
color: #E5E8EA   ;
border:none;
background-color:white;
padding-right: 20px;
padding-top: 10px;
font-size: 20px;
`
function Arrowbutton(props){
   
            return (
                <Box>
        {props.countAll ?  (
          <CustomButton onClick={props.checkAll}>
            <FaChevronDown />
          </CustomButton>
        ) : (
          <CustomButton />
        )}
      </Box>
            );
      
    }


export default Arrowbutton;