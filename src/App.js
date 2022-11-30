import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Services from './Components/ServicesComponents/Services';
import logo from './logo.jpg'

function App() {
  return (
    <div>
       <div className='logo'>
        <img className='iter' src={logo} alt="logo"/>
      </div>
      <div>
         <h1>Индивидуальный план лечения</h1>
      </div>
    
    <div className="App">
        <div className='content'>
          <AllCategories/>
          <Cart/>
        </div>
      <div className='content'>
      <Services/>
      </div>
    </div>
    </div>
  );
}

export default App;
