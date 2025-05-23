import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../puplic/assets/logo.png';
import cart from '../../puplic/assets/Cart.png';
// import { CustomSelect } from './customSelect';
import user from '../../puplic/assets/User.png';
import orders from '../../puplic/assets/Order.png';
import address from '../../puplic/assets/ph_address-book-thin.png';
import payment from '../../puplic/assets/Payemnt.png';
import returns from '../../puplic/assets/Return.png';
import help from '../../puplic/assets/Help.png';
import img2 from '../../puplic/assets/img15.png';
import img3 from '../../puplic/assets/img16.png';
import img4 from '../../puplic/assets/img17.png';

const navItems = [
  { path: '/', name: 'Home' },
  {
    path: '/products',
    name: 'Products',
    dropdown: true,
    subItems: [
      { path: '/enovowheel/Products/4*4', image: img2 },
      { path: '/enovowheel/Products/4*2', image: img3 },
      { path: '/accessories', image: img4 },
    ],
  },
  { path: '/accessories', name: 'Accessories' },
  { path: '/contact', name: 'Contact' },
];

const options = [
  { id: '1', label: 'user', value: 'user', image: user },
  { id: '2', label: 'orders', value: 'orders', image: orders },
  { id: '3', label: 'address', value: 'address', image: address },
  { id: '4', label: 'payment', value: 'payments', image: payment },
  { id: '5', label: 'returns', value: 'returns', image: returns },
  { id: '6', label: 'help', value: 'help', image: help },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ name: string; image: string } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isProductsActive = () => {
    const productSubPaths = ['/enovowheel/Products/4*4', '/enovowheel/Products/4*2'];
    return productSubPaths.some((path) => location.pathname.startsWith(path));
  };

  const handleSelect = (option: typeof options[0]) => {
    navigate(`/${option.value}`);
    setIsOpen(false);
  };

  return (
    <nav className="fixed nav">
      <div className="nav-container">
        <div className="plus flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <motion.h1
              className="text-2xl font-bold text-indigo-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="/">
                <img src={img1} className='logo' alt="logo" style={{ width: '80px', height: '34px' }} />
              </a>
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center menu-items">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.dropdown ? (
                  <button
                    className={`flex items-center px-3 py-2 focus:outline-none ${isProductsActive() ? 'act' : ''}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="flex items-center gap-2">
                      {selectedItem?.image && (
                        <img src={selectedItem.image} alt="selected" className="w-4 h-4 rounded-full" />
                      )}
                      {selectedItem?.name || item.name}
                    </span>
                    <motion.span
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 ${isActive ? 'act' : ''}`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {dropdownOpen && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="sel flex absolute bg-white shadow-lg rounded-md mt-2 z-10"
                    >
                      {item.subItems.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className="sel-item flex items-center"
                          onClick={() => {
                            setSelectedItem({ name: item.name, image: "" });
                            setDropdownOpen(false);
                          }}
                        >
                          <img src={sub.image} className="w-6 h-6 rounded-full" />
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact and Cart */}
          <div className="contact-us flex items-center">
            <motion.h1
              className="text-2xl font-bold text-indigo-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="et flex items-center gap-4">
                {/* <CustomSelect options={options} onSelect={handleSelect} placeholder="" /> */}
                <img className='' src={cart} alt="cart" style={{ width: '32px', height: '32px' }} />
              </div>
            </motion.h1>
          </div>


          

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center ${isProductsActive() ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-indigo-50'}`}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        <span className="flex items-center gap-2">
                          {selectedItem?.image && (
                            <img src={selectedItem.image} alt="selected" className="w-5 h-5 rounded-full" />
                          )}
                          {selectedItem?.name || item.name}
                        </span>
                        <motion.span
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={18} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6"
                          >
                            {item.subItems.map((sub) => (
                              <NavLink
                                key={sub.path}
                                to={sub.path}
                                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-indigo-100"
                                onClick={() => {
                                  setSelectedItem({ name: item.name, image: "" });
                                  setIsOpen(false);
                                  setDropdownOpen(false);
                                }}
                              >
                                <img src={sub.image} className="w-5 h-5 rounded-full" />
                                <span>{item.name}</span> {/* Display both image and name */}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-indigo-50'}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;