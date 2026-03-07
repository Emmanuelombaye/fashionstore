import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Menu, X, Sparkles, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = getCartCount();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/trending', label: 'Trending' },
    { to: '/shop/men', label: "Men's" },
    { to: '/shop/women', label: "Women's" },
    { to: '/shop/shoes', label: 'Shoes' },
    { to: '/shop', label: 'All Products' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </motion.div>
            <span className="font-bold text-lg sm:text-2xl text-black tracking-tight">
              JosephCashFashion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-black transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side - Cart & Contact */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+254792430211"
              className="hidden sm:flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">+254 792 430211</span>
            </a>

            <Link to="/cart" className="relative group">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <nav className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+254792430211"
                className="flex items-center gap-2 py-2 text-gray-700 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4" />
                +254 792 430211
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
