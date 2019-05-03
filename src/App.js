import React from 'react';
import './App.css';
import TableMainPage from './table-main';

class App extends React.Component{
 constructor(props){
   super(props);
   this.state={
    clicks: 0,
    show: true
   };
 }

 calculation=(hh)=>{
  switch(hh){
    case "sub":
      this.setState({ clicks : this.state.clicks - 1}); 
        break;
    case "add":
        this.setState({ clicks : this.state.clicks + 1});
        break;
    default:
      console.log("nothing")
      break;
  } }
 
render() {
  return(
    <div>
      <TableMainPage />
      <div className="text-center pt-5">
        <button className="btn btn-primary mx-2" onClick={e => this.calculation("add")}>+</button>
        <h6>{this.state.clicks}</h6>
        <button className="btn btn-danger mx-2" onClick={e => this.calculation("sub")}>-</button>
      </div>
    </div>
  );
}

}


export default App;
