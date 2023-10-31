//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App({library}) {
  const [emotion, setEmotion] = useState("happy");
  
  return (
    <div className="App">
      <h1>Currunt emotion is {emotion}</h1>
    </div>
  );
}

export default App;
