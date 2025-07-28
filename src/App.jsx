import { useState } from 'react'         // ✅ useState import qilindi
import './App.css'

function App() {
  const [count, setCount] = useState(0)  // ✅ count holati

  return (
    <>
      <h1>Salom bu frontend ilova</h1>
      {/* <p>Sanoq: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1 qo‘shish
      </button> */}
    </>
  )
}

export default App