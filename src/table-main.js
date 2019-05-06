import React,{Component} from 'react';

class TableMainPage extends Component{
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
render(){
  return(
      <div>
        <div className="pt-3">
          <button className="btn btn-primary mx-2 d-inline" onClick={e => this.calculation("add")}>+</button>
          <h6 className="d-inline">{this.state.clicks}</h6>
          <button className="btn btn-danger mx-2 d-inline" onClick={e => this.calculation("sub")}>-</button>
        </div>
      </div>
  );
}
}
 
export default TableMainPage;
