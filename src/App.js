import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Order from './pages/Order';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderDetails from './pages/OrderDetails';
import Shipped from './pages/Shipped';
import Delivered from './pages/Delivered';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Order />}/>
          <Route path='/shipped' element={<Shipped />}/>
          <Route path='/delivered' element={<Delivered />}/>
          <Route path="/details" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
