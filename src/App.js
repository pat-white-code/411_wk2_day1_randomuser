import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomUsers from './RandomUsers';


// Partner up. This is a pair programming project.
// Start with this api: https://randomuser.me/api?results=25
// Whiteboard an app you can use to display users that you would use if you didn't have your phone.
// Make a code Plan and plan your components
// Spec 1: minimum 25 users
// Spec 2: displays the user's name and thumbnail picture
// Spec 3: When "show details" button is clicked the user's details are revealed and button text turns to "hide details"
// Spec 4: When "hide details" is clicked the user's details disappear.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RandomUsers />
      </header>
    </div>
  );
}

export default App;
