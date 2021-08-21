import React from "react";
import "./button.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export const Button = ({ type, children }) => {
    //change button style
    let buttonStyles = ""
    if (type ==='lightColor') {
      buttonStyles = "buttonStyle"
    } 
    else if(type==='buttonStyleDark') {
      buttonStyles = "buttonStyleDark"
    } 
    else if(type ==='buttonStyleWhite'){
     buttonStyles = "buttonStyleWhite"
    }   
  const notify = () => toast("Wow so easy!");

  return(
    <button className={buttonStyles} >{children} {'>'}</button>
  )
}

export default Button;
