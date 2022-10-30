import { useState } from 'react'
import reactLogo from './assets/react.svg'
import data from './data'
import Card from './components/Card'
import Nav from './components/Nav'
import './App.css'

function App() {
  const dataArray = data.map(data=>{
    return(
      <Card 
        key={data.id}
        info={data}
      />
    )
  })
  return (
    <div className="container">
      <Nav />
      {dataArray}
    </div>
  )
}

export default App
