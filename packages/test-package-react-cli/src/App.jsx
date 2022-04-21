import { useState } from 'react'
import { add } from 'test-package-jacky-utils'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log('add:', add(1, 2))
  return <div className="App">test package</div>
}

export default App
