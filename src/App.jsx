import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Location from './components/Location'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  const [ boolean,setBoolean ] = useState(false)
  const [ location,setLocation ] = useState({});

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 125)+1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => { setLocation(res.data) , setBoolean(true) })
  }, []);

  return (
    <div className="App">
      { boolean ? 
      <Location location={location} setLocation={setLocation}  /> :
      <div className="loader" ></div>
      }
    </div>
  )
}

export default App
