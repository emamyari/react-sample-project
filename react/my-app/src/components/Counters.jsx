import React, { Component, createFactory } from 'react';
import Counter from './Counter';
import App from '../App.js';
import NavBar from './NavBar';
class counters extends React.Component {

    render() { 
        console.log("render-Counters")

        const {onReset,onDelete,onInc}=this.props;
        return <div>

            {this.props.counters.map(counter=>(
            <Counter 
            id={counter.id} 
            key={counter.id}
            value={counter.value}
            onDelete={onDelete}
            onIncrement={onInc}
            counter={counter}><h5>{counter.title}</h5></Counter>))}
            <br></br><button className="btn btn-primary btn-sm m2" onClick={onReset}>reset</button>
        </div>;
    }
}
 
export default counters;