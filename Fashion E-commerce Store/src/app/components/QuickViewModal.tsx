import { useState } from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import { Link } from 'react-router';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
    toast.success('Added to cart!');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Image */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.trending && (
                    <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs font-semibold rounded-full">
                      🔥 TRENDING
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {product.subcategory}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="text-3xl font-bold text-black mb-6">
                    KES {product.price.toLocaleString()}
                  </div>

                  {/* Size Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Select Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${
                            selectedSize === size
                              ? 'bg-black text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 mt-auto">
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                    
                    <Link
                      to={`/product/${product.id}`}
                      onClick={onClose}
                      className="block w-full text-center bg-white text-black border-2 border-black py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                    >
                      View Full Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
