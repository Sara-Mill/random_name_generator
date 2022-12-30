import logo from './logo.svg';
import './App.css';
import { userNames } from './components/userList';
import { useState } from 'react';
import React from 'react';

//Components
import { ProgressBar } from './components/ProgressBar';
import { Spinner } from './components/Spinner';

function App() {


  //States
  const [users,setUsers]=useState(userNames);
  const [winners, setWinners]=useState([]);

  const [uiProps,setUiProps]=useState({
    buttonDisabled: false,
    displayProgressBar: false,
  });

  const [error, setError] = useState({
    processTime: 3000,
    loading: false,
  });


  //Utility Functions
  let randomName;
  function getRandomName() {
    return (randomName = users[Math.floor(Math.random()* userNames.length)]);
  }

  //Handlers
  const handleGetRandomName = () => {
      setUiProps ({
        buttonDisabled: true,
        displayProgressBar:true,
    });
    setTimeout(() => {
      getRandomName();
      console.log(randomName);

      if(typeof randomName === "undefined") {
        //handle error
        setError({processTime:1000, loading: true});
        handleGetRandomName();
      } else {

          // Add random name to winner list
          setWinners([...winners, randomName]);
          //update and remove the random name from our users
          const updateNameList=users.filter((user) => user !== randomName);

          setUsers(updateNameList);

          setUiProps ({
            buttonDisabled: false,
            displayProgressBar: false,
          });
          setError({
            processTime: 3000,
            loading: false,
          });
        } 
      }, error.processTime);
      //console.log(getRandomName());
  };

  
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
        {error.loading? (< Spinner />
        ) : (<img src={logo} className="App-logo" alt="logo" />)}
        
       
          <h1>30</h1>
        
        <button onClick={handleGetRandomName} disabled={uiProps.buttonDisabled}
        >Get Random Name</button>
        </div>
        <ul className="winners">
          {winners.map((winner,index) =>
          <li key={index} className="list-item">{winner}</li>
          )}
        </ul>
        
      </header>
    </div>
  );
};

export default App;
