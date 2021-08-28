import React from "react";
import "./button.css"

  
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

  return(
    <button className={buttonStyles} >{children} </button>
  )
}

export default Button;
