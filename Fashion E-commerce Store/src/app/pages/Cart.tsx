import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const message = `Hi! I'd like to place an order:\n\n${cart
      .map(
        item =>
          `${item.name}\nSize: ${item.selectedSize}\nQty: ${item.quantity}\nPrice: KES ${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join('\n\n')}\n\n*Total: KES ${getCartTotal().toLocaleString()}*`;

    const whatsappUrl = `https://wa.me/254792430211?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Add some products to get started!
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Continue Shopping
          </button>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cart.reduce((sum, item) => sum + item.quantity, 0)} items in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={`${item.id}-${item.selectedSize}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                  {/* Product Image */}
                  <Link
                    to={`/product/${item.id}`}
                    className="w-full sm:w-32 h-40 sm:h-32 flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/product/${item.id}`}
                          className="font-semibold text-gray-900 hover:text-black transition-colors line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.selectedSize, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.selectedSize, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-bold text-lg text-gray-900">
                          KES {(item.price * item.quantity).toLocaleString()}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-gray-500">
                            KES {item.price.toLocaleString()} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Clear Cart Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                if (window.confirm('Are you sure you want to clear your cart?')) {
                  clearCart();
                  toast.success('Cart cleared');
                }
              }}
              className="w-full py-3 text-red-600 hover:text-red-700 transition-colors font-medium"
            >
              Clear Cart
            </motion.button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>KES {getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-black">
                      KES {getCartTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                className="w-full bg-green-500 text-white py-4 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 mb-3"
              >
                💬 Checkout via WhatsApp
              </motion.button>

              <Link
                to="/shop"
                className="block text-center text-gray-600 hover:text-black transition-colors font-medium"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-sm text-gray-900 mb-3">
                  Contact Us
                </h3>
                <a
                  href="tel:+254792430211"
                  className="block text-sm text-gray-600 hover:text-black transition-colors"
                >
                  📞 +254 792 430211
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
