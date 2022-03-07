import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"


class Counter extends React.Component {
    
        // state = {Count : this.props.value,
    // tags:["t" , "a"]}
    //  clk(){
    //      var state = 0
    //  }
    render() { 
        console.log("render-Counterrrr")


        let cl = "badge badge-";
        cl += (this.props.value===0)? "warning" : "primary";
        return <div>{this.props.children}<span className={cl}>{(this.props.value===0)?"zero" : this.props.value}</span>
        
        <button className='btn btn-success' onClick={    () => this.props.onIncrement(this.props.counter)}>inc</button>
        <button onClick={()=>this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm m-2'>delete</button></div>;
        
    // if(this.state.tags.length === 0)
        //     return(
        //         <h1>وارد بنما داش</h1>
        //     )
        // else
        //     return( <ul>{this.state.tags.map(a=><li key={a}>{a}</li>)}</ul>)
        
    }
}
 
export default Counter;