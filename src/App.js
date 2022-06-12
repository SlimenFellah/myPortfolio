import './App.css';
import Brief from './components/Brief';
import Contact from './components/Contact';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Main/><div id='brief'/>
      <Brief/><div id='skills'/>
      <Skills/><div id='portfolio'/>
      <Portfolio id='contact'/>
      <Contact/>
    </div>
  );
}

export default App;
