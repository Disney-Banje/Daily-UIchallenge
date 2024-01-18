import Content from './content';
import './App.css';
import Camocopy from './assets/comocopy-logo.svg';

function App() {
  return (
    <div className='hero_section'>
      <div className='hero_cover'>
        <img className='logo_page' src={Camocopy} alt="" />
      </div>
      <Content />
    </div>
  );
}

export default App
