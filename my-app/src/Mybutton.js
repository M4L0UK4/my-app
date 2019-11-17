import React from "react"


function MyButton (props) {
    
return( 
(props.profileLink=="Facebook")?(<button onClick={props.onSimpleClick}>Facebook Link</button>):(<p>No button link</p>)

);
}
export default MyButton;