import React, { Component, createFactory } from 'react';

import './App.css';
import Counters from "./components/Counters.jsx"
import NavBar from './components/NavBar.jsx';
import PercentageArea from './components/chart.jsx'

import Mui from './components/mui'

class App extends Component{
    state = {counters: [
    ]}    

     title = 'Historic and Estimated Worldwide Population Distribution by Region'
     data = [{
              name: 'Asia',
              data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
              name: 'Africa',
              data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
              name: 'Europe',
              data: [163, 203, 276, 408, 547, 729, 628]
            }, {
              name: 'America',
              data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
              name: 'Oceania',
              data: [2, 2, 2, 6, 13, 30, 46]
        }]
    


  constructor(){
    super();
    console.log("constructor")
  }
  componentDidMount() {
    fetch("http://192.168.1.12:8000/counters/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.counters)
          this.setState({counters:result.counters})
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
        },
        (error) => {
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
        }
      )
  }


  handleDelete=counterID=>{
    const counters= this.state.counters.filter(c=>c.id !=counterID)
    this.setState({counters:counters})
  }
  handleIncrement=counter=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
  }
  handleReset=(reset)=>{
    const counters = this.state.counters.map(cc=>{cc.value=0 ; return cc ;})
    console.log(this.state.counters)
    this.setState({counters})
  }
  render(){
    console.log("render-appjs")
    return (<Mui></Mui>)
    // return (<div><PercentageArea title={this.title} data={this.data} /></div>)
    
  }
}
export default App;

// (<div>

//   <PercentageArea title={title} data={data} />,
//     document.getElementById('app')
       
//         <NavBar total={this.state.counters.filter(c=>c.value>0).length} />
//         <Counters 
//         counters={this.state.counters}
//         onReset={this.handleReset}
//         onInc={this.handleIncrement}
//         onDelete={this.handleDelete} 
        
//         />
        
  
//   <table class="table table-hover">
//     <thead>
//       <tr>
//         <th scope="col">عنوان</th>
//         <th scope="col"> تعداد</th>
//       </tr>
//     </thead>
//     <tbody>
//       {this.state.counters.filter(s=>s.value>0).map(c=><tr class="table-active">
//         <td>{c.title}</td>
//         <td>{c.value}</td>
//       </tr>)}
//     </tbody>
//   </table>
  
  
  
//         </div>)