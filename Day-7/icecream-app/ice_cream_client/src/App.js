import React from 'react';
import LineChart from "./components/LineChart.js";
import './App.css';

function App() {
  const getData = () => {
    fetch('/locations')                                        
      .then(response => response.json())                                            
      .then(json => console.log(json))                                              
      .catch(err => console.log(err))  
  }
  return (
    <div className="App">
      <LineChart />
    </div>
  );
};

export default App;
