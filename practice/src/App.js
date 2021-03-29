import './App.css';
import * as React from 'react';
import axios from 'axios';

const {useState} = React;

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api/')
    .then(res => {
      console.log(res)
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={ () => {
        setCounter(counter + 1);
        
      }} >Increase counter</button>

      <button onClick={ () => {
        fetchRandomData();
      }} >Fetch Random</button>
    </div>
    
  );
}

export default App;
