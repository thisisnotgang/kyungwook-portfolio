import React from 'react'
import Intro from '../src/components/Intro'
import Career from '../src/components/Career'
import GovSupportProjects from '../src/components/GovSupportProjects'
import './App.css'

function App() {
  return (
    <div className="App">
      <Intro />
      <Career />
      <GovSupportProjects />
    </div>
  )
}

export default App