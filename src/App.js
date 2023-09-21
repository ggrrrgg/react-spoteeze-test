
import './App.css';

function App() {
  return (
    <div className="App">
      {/* user input artist and album name to retrieve available credits info from deezer api */}
      <h1>Freshmess</h1>
      <form id="userInput" >
      
        <h2>Please enter artist and release title:</h2>
        <input type="text" value="" id="input"></input>
      <button onClick="search()">Go!</button>
      </form>
    </div>
  );
}

export default App;
