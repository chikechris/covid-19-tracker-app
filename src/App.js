import React, {useState, useEffect} from 'react' 
import  './App.css'
import {url} from './api'
import axios  from 'axios' 

import {Cards, Chart, Countries} from './components'


const App = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchData() {
      const {data: {confirmed, recovered, deaths, lastUpdated}} = await axios.get(url)
      const modifiedData ={
        confirmed,
        recovered,
        deaths, 
        lastUpdated 
      }
      setData(modifiedData)
      console.log(modifiedData)

      return modifiedData
    }
  fetchData()
  }, [])
  return (
    <div className= 'container'>
      <Cards data={data}/>
      <Countries/>
      <Chart/>
     
    </div>
  )
}

export default App
