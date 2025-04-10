import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
// import Projects from './Projects'
import Layout from '../src/layers/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* INDEX 엘리먼트 : App.jsx */}
          <Route index element={<App />} /> 

          {/* PATH 엘리먼트 */}
          {/* <Route path="projects" element={<Projects />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)