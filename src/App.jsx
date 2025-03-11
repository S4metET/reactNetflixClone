import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/sidebar";
import Search from "./components/search";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Search />
    </>
  )
}

export default App
