import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

function App() {

  const [userInput, setUserInput] = useState("react");
  const [repos, setRepos] = useState([]);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
    fetch(`https://api.github.com/search/repositories?q=${userInput}`)
    .then(res => res.json())
    .then(data => {  
      setRepos(data.items);
      console.log(data);
    })
    }
  }


  return (
    <div className="App">
      <Search 
      handleInput={handleInput}
      handleSearch={handleSearch}
      />
      <Results repos={repos}/>
    </div>
  );
}

export default App;
