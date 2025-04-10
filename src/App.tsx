import {Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Produxt4 from './pages/ProductFour';
import Produxt2 from './pages/ProductTwo';
import Accessories from './pages/Accessories';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import User from './pages/Profile/User';
import Orders from './pages/Profile/Orders';
import Payments from './pages/Profile/Payments';
import Claims from './pages/Profile/Claims';
import Address from './pages/Profile/Address';
import Setting from './pages/Profile/Setting';
import Shopping from './pages/Shopping';
import ScrollToTop from './components/ScrollTop';


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <div className='contain'>
          <Navbar />
          <main className="x">
            <AnimatePresence mode="wait">
            <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/enovowheel/Products/4*4" element={<Produxt4 />} />
                <Route path="/enovowheel/Products/4*2" element={<Produxt2 />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user" element={<User />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/warranty-claims" element={<Claims />} />
                <Route path="/address" element={<Address />} />
                <Route path="/security-settings" element={<Setting />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shopping" element={<Shopping />} />
              </Routes>
            </AnimatePresence>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;