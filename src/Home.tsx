import { useState } from 'react'
import reactLogo from './assets/react.svg'
import antdLogo from './assets/antd.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import {Button} from "antd";

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="div-home">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://ant.design/docs/react/getting-started" target="_blank">
                    <img src={antdLogo} width={30} className="logo antd" alt="Ant Design logo" />
                </a>
            </div>
            <h1>Vite + React + Ant Design</h1>
            <div className="card">
                <Button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
            </div>
            <p className="read-the-docs">
                Click on the Vite, React, Ant Design logos to learn more
            </p>
        </div>

    </>
  )
}

export default Home
