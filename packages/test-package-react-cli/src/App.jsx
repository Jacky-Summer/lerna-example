import { useState } from 'react'
import utils from 'test-package-jacky-utils'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log('utils', utils)
  return <div className="App">test package</div>
}

export default App
