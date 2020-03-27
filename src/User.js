import React, {Component} from 'react';
import './user.css';

class User extends Component{
  state = {
    showMore:false,
    rendered:false
  }

  showMore = () => {
    this.setState({
      showMore: !this.state.showMore,
      rendered: true
    })
  }
  
  render(){
    const {user} = this.props
    let userSlideClass;
    if(!this.state.rendered){userSlideClass=''} else {
      this.state.showMore ? userSlideClass = 'user-card-slide' : userSlideClass = 'user-card-unslide'
    }
    let slideClass;
    if(!this.state.rendered){slideClass=''} else {
      this.state.showMore ? slideClass = 'card-slide' : slideClass = 'card-unslide'
    }
    // console.log(this.props);  
    return(
      <div className='wrapper'>
        <div className={`user-card ${userSlideClass}`}>
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
          <div className={`more-info ${slideClass}`}>
            <p>Age: {user.dob.age}</p>
          </div>
      </div>
    )
  }
}

export default User;


// <div className={`user-card ${this.state.showMore && this.state.rendered ? 'user-card-slide' : 'user-card-unslide'}`}>