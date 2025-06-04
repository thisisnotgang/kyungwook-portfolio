import React from 'react'
import Intro from '../src/components/Intro'
import Career from '../src/components/Career'
import Portfolio from '../src/components/Portfolio'
import GovSupportProjects from '../src/components/GovSupportProjects'
import Skills from '../src/components/Skills'
import Awards from '../src/components/Awards'
import './App.css'

function App() {
  return (
    <div className="App">
      <Intro />
      <Career />
      <Portfolio />
      <GovSupportProjects />
      <Skills />
      <Awards />
    </div>
  )
}

export default App