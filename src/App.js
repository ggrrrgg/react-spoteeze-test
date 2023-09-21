import React from 'react';
import './App.css';

// user to retrieve collection from spotify api then select a release to return album credits from deezer
function App() {
  return (
    <div className="App">
      
      <h1>Albumn Credits for Spotify Collection</h1>
      <form id="userInput" >
      
        <h2>Researching..</h2>
        <input type="text" value="" id="input"></input>
      <button onClick="search()">Go!</button>
      </form>
    </div>
  );
}

export default App;
