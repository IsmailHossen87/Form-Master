// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
// import SimpleFrom from './Components/SimpleFrom'
// import StateFulFrom from './Components/StateFulFrom'
// import RefFrom from './Components/RefFrom'
// import HookFrom from './Components/HookFrom'
function App() {

  
  // const handleSingUpSubmit = data => {
  //   console.log("SingUp ",data)
  // }
  // const handleUpdateSubmit = data => {
  //   console.log("SingUp ",data)
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Form Master</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFulFrom></StateFulFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
      <GrandPa></GrandPa>
      {/* <ReausableFrom handleSubmit={handleSingUpSubmit} > <div><h2>Sing Up</h2></div></ReausableFrom>
      <ReausableFrom handleSubmit={handleUpdateSubmit} > <div><h2>Sing Up</h2></div></ReausableFrom> */}
     
    </>
  )
}

export default App
