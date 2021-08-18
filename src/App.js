import React from "react";
import Tweet from './Tweet';
import'./App.css';

function App() {
  return (
    <div className="app">
      
      <Tweet name="Hans" message="Hello Hans" likes="5"/>
      <Tweet name="Jesus" message="Hello Jesus" likes="5"/>
      <Tweet name="Michael" message="Hello Michael" likes="5"/>
    </div>
  );
}

export default App;
