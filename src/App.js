import './App.css';
import { Header } from './component/Header';
import { Experiencia } from './component/Experiencia';
import { Desarrollo } from './component/Desarrollo';
import { Skills } from './component/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Experiencia/>
      <Desarrollo/>
    </div>
  );
}

export default App;
