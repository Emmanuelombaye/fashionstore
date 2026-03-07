import { Link } from 'react-router';
import { Product } from '../data/products';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ProductImage } from './ProductImage';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Use images array if available, otherwise create array from single image
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image, product.image];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <ProductImage 
            images={productImages}
            alt={product.name}
            isHovered={isHovered}
          />
          
          {/* Trending Badge */}
          {product.trending && (
            <motion.div
              initial={{ scale: 0, rotate: -12 }}
              animate={{ scale: 1, rotate: -12 }}
              className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs font-semibold rounded-full z-10"
            >
              🔥 TRENDING
            </motion.div>
          )}

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 z-10"
          >
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Heart className="w-5 h-5 text-black" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
            >
              <Eye className="w-5 h-5 text-black" />
            </motion.button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.subcategory}
          </p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-black">
              KES {product.price.toLocaleString()}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <ShoppingCart className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}