import React from 'react';
function Title(props) {
    var small = '18px';
    if(props.small)
    {
    return(
        <h1 style={{fontSize:small}}>{props.children}</h1>
    );}
    else{
        return(
            <h1>{props.children}</h1>
        );
    }
}
export default Title;