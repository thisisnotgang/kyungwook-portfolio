import React from 'react'
import Intro from '../src/components/Intro'
import Career from '../src/components/Career'
import GovSupportProjects from '../src/components/GovSupportProjects'
import Skills from '../src/components/Skills'
import Awards from '../src/components/Awards'
import './App.css'

function App() {
  return (
    <div className="App">
      <Intro />
      <Career />
      <GovSupportProjects />
      <Skills />
      <Awards />
    </div>
  )
}

export default App