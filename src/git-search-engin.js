import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile';
class GitSearchEnginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      profileData: ''
    };
  }
  handleChange=(e)=>{
    this.setState({username:e.target.value})
  }
  handleClick=async (e)=>{
    e.preventDefault(); 
    axios
    .get("https://api.github.com/users/"+this.state.username)
    .then(resp => {
      console.log(resp.data)
      if(resp.data){
        this.setState({
          profileData: resp.data
        }, () => console.log('stoored ', this.state.profileData))
      }
    })
  }

  render() {
    return (
      <div>
        <form className="p-4" onSubmit={this.handleClick}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Enter username"
          />
          <button className="btn btn-primary ml-2">Submit</button>

          {
            this.state.profileData && 
            <Profile
              data={this.state.profileData}
            
            />
          }
        </form>
      </div>
    );
  }
}

export default GitSearchEnginPage;
