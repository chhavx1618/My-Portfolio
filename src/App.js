import React from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { NavBar } from "./components/NavBar"
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Connect } from "./components/Connect"

const App = React.memo(() => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Connect />
    </div>
  );
});

export default App;
