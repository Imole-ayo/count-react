import React from "react";

class Buttons extends React.Component{


    render(){
        const {increaseCount, decreaseCount}=this.props
        return(
            
            <div style={{width:'50%', display:'flex',justifyContent:'space-around'}}>
            <button onClick={increaseCount} style={{padding:'10px', cursor:'pointer', backgroundColor:'green', borderRadius:'7px', color:'white'}}>Increase</button>
            <button  onClick={decreaseCount} style={{padding:'10px', cursor:'pointer', backgroundColor:'red', color:'white',borderRadius:'7px'}}>Decrease</button>
        </div>
        )
        }

      
}
export default Buttons;