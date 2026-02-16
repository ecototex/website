import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import BootAnimation from './components/BootAnimation';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [bags, setBags] = useState([]);

  useEffect(() => {
    // Prefetch data while animation is playing
    axios.get('/api/products')
      .then(res => setBags(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      {isLoading && <BootAnimation onComplete={() => setIsLoading(false)} />}
      <CartProvider>
          <Router>
            <CartDrawer />
            <Routes>
              <Route path="/" element={<Home bags={bags} />} />
              <Route path="/product/:code" element={<ProductDetail />} />
            </Routes>
          </Router>
      </CartProvider>
    </>
  );
}

export default App;
