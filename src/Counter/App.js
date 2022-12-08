
import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";


class App  extends React.Component {
// we use probs to pass funtion to child-component 
//use call back 

count = 0;

countValue=(countValue)=>{
    this.count = countValue;
}

state = {// state is used for holding data
    count:0
}
increaseCount=()=>{
this.setState({count:this.state.count +1});
//this.props.sendCountValue(this.state.count);.....alternative method

}
decreaseCount=()=>{
this.setState({count:(this.state.count -1===-1)? 0:this.state.count -1});// alternative to decrease (this.state.count -1<=0)? 0:this.state.count-1)
//this.props.sendCountValue(this.state.count);..alternative method
}

render(){
    return(
        <div style = {{display: 'flex ', flexDirection:'column',alignItems:'center', marginTop:'20px',}}>
            <Display count={this.state.count}/>
            <Buttons increaseCount = {this.increaseCount} decreaseCount={this.decreaseCount}/>
          
        </div>

    )
   }
}
export default App;