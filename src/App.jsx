import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/sidebar";
import Search from "./components/search";
import Trending from "./components/trending";
import Recommended from "./components/recommended";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#000000] '>
      <Sidebar />
      <Search />
      <Trending />
      <Recommended />

      </div>

    </>
  )
}

export default App
