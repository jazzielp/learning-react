import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handlerMove = (e) => {
      const { clientX, clientY } = e
      console.log('handlerMove', clientX, clientY)
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('mousemove', handlerMove)
    }

    return () => {
      window.removeEventListener('mousemove', handlerMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnabled(!enabled)}>{ enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

export default App
