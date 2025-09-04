import { useState } from 'react'
import { StrictMode } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './components/Contact.jsx'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Navbar from './components/Navbar.jsx'
import { createBrowserRouter, Routes, Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where the current page will render */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <StrictMode>
        <RouterProvider router={router} />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </StrictMode>
    </>
  )
}

export default App
