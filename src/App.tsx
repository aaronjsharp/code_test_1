
import { useState, type MouseEvent } from 'react'
import './App.css'

interface DotProps {
  x: number;
  y: number;
}

function App() {
  const [dots, setDots] = useState<DotProps[]>([])

  const draw = (e: MouseEvent) => {
    const { clientX, clientY } = e
    setDots([...dots, {x: clientX, y: clientY}])
  }

  return (
   <div className='App'>
    <div id="button-wrapper" className='gap-2'>
      <button>Undo</button>
      <button>Redo</button>
    </div>
    <div id="click-area" onClick={draw}>
      {dots.map(({x, y}: DotProps, i: number) => (
        <div key={i} style={{left: x, top: y}} className='dot'/>
      ))}
    </div>
   </div>
  )
}

export default App
