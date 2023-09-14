
import { useState, type MouseEvent } from 'react'
import './App.css'

interface DotProps {
  x: number;
  y: number;
}

function App() {
  const [dots, setDots] = useState<DotProps[]>([])
  const [cache, setCache] = useState<DotProps[]>([])
  const draw = (e: MouseEvent) => {
    const { clientX, clientY } = e
    setDots([...dots, { x: clientX, y: clientY }])
  }

  const undo = () => {
    if (dots.length > 0) {
      const newDots = [...dots]
      const lastDot = newDots.pop() as DotProps
      Promise.all([setCache([...cache, lastDot]),
      setDots([...newDots])])
    }
  }

  const redo = () => {
    if (cache.length > 0) {
      const newCache = [...cache]
      const lastCacheItem = newCache.pop() as DotProps
      Promise.all([
        setCache(newCache),
        setDots([...dots, lastCacheItem])
      ])
    } 
  }

  return (
    <div className='App'>
      <div id="button-wrapper" className='gap-2'>
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>
      <div id="click-area" onClick={draw}>
        {dots.map(({ x, y }: DotProps, i: number) => (
          <div key={i} style={{ left: x, top: y }} className='dot' />
        ))}
      </div>
    </div>
  )
}

export default App
