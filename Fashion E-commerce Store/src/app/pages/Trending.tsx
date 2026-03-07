import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { TrendingUp } from 'lucide-react';

export function Trending() {
  const trendingProducts = products.filter(p => p.trending);

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Hot Right Now</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            🔥 Trending Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what everyone's loving right now. These popular items are flying off the shelves!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
