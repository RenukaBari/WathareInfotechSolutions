import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { set } from 'mongoose';

function App() {
  const[data, setData] = useState({})
  const getData = async () => {
    const response = await fetch(`http://localhost:3001/get`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    const json = await response.json()
    setData(json)
}
useEffect(() => {
  getData()
}, [])
  return (
    <div>
     ${data}
    </div>
  );
}

export default App;
