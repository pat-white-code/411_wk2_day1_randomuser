import React, {Component} from 'react';
import User from './User';

class RandomUsers extends Component{
  state = {data: []}

  componentDidMount(){
    fetch('https://randomuser.me/api?results=25')
      .then(res => res.json())
      .then(json => this.setState({data: json.results}))
  }
  render(){
    return(
    <div>
      <h1>Random Users</h1>
      {this.state.data.map((user, index) => <User key={index} user={user} />
      )}
    </div>
    )
  }
}

export default RandomUsers;