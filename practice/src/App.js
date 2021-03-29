import './App.css';
import * as React from 'react';
import axios from 'axios';

const {useEffect, useState} = React;

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api/')
    .then(({data}) => {
      console.log(data)
      return JSON.stringify(data, null, 2)
    })
    .catch(err => {
      console.log(err)
    })
}

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState('')

  useEffect(() => {
    fetchRandomData().then(randomData => {
      setRandomUserData(randomData || "No user data found")
    })
  }, []);

  return (
    <div >
      <p>{counter}</p>
      <button onClick={ () => {
        setCounter(counter + 1);
        
      }} >Increase counter</button>

      <br/>
      <pre>
        {randomUserData}
      </pre >
      {/* <button onClick={ () => {
        fetchRandomData();
      }} >Fetch Random</button> */}
    </div>
    
  );
}

export default App;
