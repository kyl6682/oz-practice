import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dateTime, setDateTime] = useState(new Date())
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setDateTime(new Date())
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning])

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
      <h1>Oz Practice</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        {/* ✅ 날짜와 시간 표시 */}
        <p>🕒 현재 시간: {dateTime.toLocaleString()}</p>

        {/* ✅ 스탑 / 계속 버튼 */}
        <div style={{ marginTop: '1rem' }}>
          <button onClick={() => setIsRunning(false)} style={{ marginRight: '0.5rem' }}>
            ⏸️ 스탑
          </button>
          <button onClick={() => setIsRunning(true)}>
            ▶️ 계속
          </button>
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
