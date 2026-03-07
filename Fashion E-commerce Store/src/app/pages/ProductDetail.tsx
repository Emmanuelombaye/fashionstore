import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, ArrowLeft, Check, Share2, Truck, Shield, RefreshCw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { toast } from 'sonner';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/shop" className="text-black hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    navigate('/cart');
  };

  const handleWhatsAppOrder = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    const message = `Hi! I'm interested in ordering:\n\n${product.name}\nSize: ${selectedSize}\nQuantity: ${quantity}\nPrice: KES ${(product.price * quantity).toLocaleString()}\n\nProduct Link: ${window.location.href}`;
    const whatsappUrl = `https://wa.me/254792430211?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.trending && (
                  <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 text-sm font-semibold rounded-full">
                    🔥 TRENDING
                  </div>
                )}
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                {product.subcategory}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <div className="text-4xl font-bold text-black">
                KES {product.price.toLocaleString()}
              </div>
              <p className="text-sm text-gray-500 mt-2">Tax included. Shipping calculated at checkout.</p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Size: {selectedSize && <span className="text-gray-600">({selectedSize})</span>}
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-black text-white scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center font-semibold"
                >
                  −
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBuyNow}
                className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Buy Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full bg-white text-black border-2 border-black py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 text-white py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                💬 Order via WhatsApp
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-gray-700 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Fast Delivery</p>
                  <p className="text-xs text-gray-600">2-5 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-gray-700 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Secure Payment</p>
                  <p className="text-xs text-gray-600">100% secure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-gray-700 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-600">14-day returns</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
