import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import BootAnimation from './components/BootAnimation';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

import { bags as staticBags } from './data/bags';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [bags] = useState(staticBags);

  useEffect(() => {
    // Simulate loading for animation
    const timer = setTimeout(() => {
        setIsLoading(false); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <BootAnimation onComplete={() => setIsLoading(false)} />}
      <CartProvider>
          <Router basename={import.meta.env.VITE_GITHUB_PAGES ? '/website/' : '/'}>
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
