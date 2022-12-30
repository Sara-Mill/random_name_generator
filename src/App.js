import logo from './logo.svg';
import './App.css';
import { userNames } from './components/userList';
import { useState} from "react";
import React from 'react';

//Components
import { ProgressBar } from './components/ProgressBar';

function App() {


  //States
  const [users,setUsers]=useState(userNames);
  const [winners, setWinners]=useState([]);

  const [uiProps,setUiProps]=useState({
    buttonDisabled: false,
    displayProgressBar: false,
  });

//Handlers
const handleGetRandomName =()=>{console.log(getRandomName());
//getRandomName();
};

  //Utility Functions
  let randomName;
  function getRandomName() {
    return (randomName = users[Math.floor(Math.random()* userNames.length)]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <ul id="userList">
          {users.map((user, index) => (
            <li className="list-item" key={index}>
              {user}
            </li>
          ))}
        </ul>
        <div className="react-container">
          {uiProps.displayProgressBar && <ProgressBar/>}
        {<img src={logo} className="App-logo" alt="logo" />}
       
          <h1>30</h1>
        
        <button onClick={handleGetRandomName}>Get Random Name</button>
        </div>
        <ul className="winners">
          {winners.map((winner,index) =>
          <li key={index} className="list-item">{winner}</li>
          )}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
