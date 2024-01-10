import './App.css';
import Product from './Product';


function App() {
  return (
    <div className='App'>
      <div className='header'>
      <p className='product-tag'>No subscription requireds</p>
      <h1 className='product-punchline'>Get everything, forever.</h1>
      <p className='punchline-para'>Gain access to our complete library of components. Unlimited combinations for you to build better websites faster. New components and products added regularly</p>
      </div>
        <Product />
    </div>
  );  
}

export default App;
