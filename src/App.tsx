
import { useState } from 'react'
import './App.css'

interface DotProps {
  x: number;
  y: number;
}

function App() {
  const [dots, setDots] = useState<DotProps[]>([])

  return (
   <div className='App'>

   </div>
  )
}

export default App
