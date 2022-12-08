import React from "react";

const Display = (props)=>{

    return(
        <div style = {{fontSize:'32px', marginBottom:'30px', }} id='display' >Count: {props.count}</div>
    )
}

export default Display;
