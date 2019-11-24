import React from "react"


function MyButton (props) {
    
return( 
    
    <button onClick={props.onSimpleClick}>{props.children}</button>

);
}
export default MyButton;