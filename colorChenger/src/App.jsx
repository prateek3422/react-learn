import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  const bgcolor = () =>{

  }

  return (
    <>
   
    <div className="color"  style ={{backgroundColor : color}}>

    <button onClick={() => setColor("grey")}>grey</button>
    <button onClick={()=> setColor("red")}>red</button>
    <button onClick={()  =>setColor("yellow")}>yellow</button>
    <button onClick={() => setColor("purple")}>purple</button>
    </div>
    </>
  )
}

export default App
