import React, {Component} from 'react';
import './user.css';

class User extends Component{
  state = {
    showMore:false
  }

  showMore = () => {
    this.setState({
      showMore: true
    })
  }
  
  render(){
    const {user} = this.props
    // console.log(this.props);  
    return(
      <div className='wrapper'>
        <div className='user-card'>
          <div className='img-container'>
            <img className='user-img' alt='user thumbnail' src={user.picture.large} />
          </div>
          <div className='info-container'>
            <h1>{user.name.first} {user.name.last}</h1>
            <h2>{user.phone}</h2>
            <button onClick={this.showMore}>Show More >> </button>
          </div>
          {/* <div className='show-button'>
            <button>Show More >> </button>
          </div> */}
        </div>

        {this.state.showMore && (

          <div className='more-info'>
            <p>Age: {user.dob.age}</p>
          </div>

        )}
      </div>
    )
  }
}

export default User;