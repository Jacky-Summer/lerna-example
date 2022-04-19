import { useState } from 'react'
import { add } from 'test-package-jacky-utils'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div className="App">test package {console.log(add(1, 2))}</div>
}

export default App
