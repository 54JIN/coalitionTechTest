import React, { useState, useEffect } from 'react'
import axios from 'axios';

//Imported Components
import Header from './Pages/Header/Header'
import Patients from './Pages/Patients/Patients'

//CSS Imports
import './App.css';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`https://fedskillstest.coalitiontechnologies.workers.dev`, {
          auth: {
              username: 'coalition',
              password: 'skills-test'
          }
        })
        setData(response.data)
      } catch (e) {
        console.log(e)
      } 
    }

    getUsers()

  }, [])

  return (
    <div className="App">
      <Header />
      <Patients patients={data}/>
    </div>
  );
}

export default App;
