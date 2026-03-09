import { Link } from 'react-router';
import { ArrowRight, Sparkles, TrendingUp, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const trendingProducts = products.filter(p => p.trending).slice(0, 8);
  const featuredProducts = products.slice(0, 12);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] sm:h-[90vh] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"
        />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Premium Fashion Collection 2026</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Elevate Your Style
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  With Confidence
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
                Discover the latest trends in fashion. From elegant outfits to stylish footwear - we've got everything you need to express yourself.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/shop"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Shop Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/trending"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <TrendingUp className="w-5 h-5" />
                    View Trending
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
        />
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections for men, women, and shoes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Men's Fashion",
                description: 'Suits, casual wear & more',
                to: '/shop/men',
                gradient: 'from-blue-600 to-blue-800',
                icon: ShoppingBag,
                images: [
                  'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
                  'https://images.unsplash.com/photo-1516826957135-700ede19c6ce?w=800&q=80'
                ]
              },
              {
                title: "Women's Fashion",
                description: 'Dresses, tops & accessories',
                to: '/shop/women',
                gradient: 'from-pink-600 to-pink-800',
                icon: Sparkles,
                images: [
                  'https://images.unsplash.com/photo-1515347619152-6d1af889602f?w=800&q=80',
                  'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80'
                ]
              },
              {
                title: 'Shoes Collection',
                description: 'Sneakers, heels & boots',
                to: '/shop/shoes',
                gradient: 'from-purple-600 to-purple-800',
                icon: TrendingUp,
                images: [
                  'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
                  'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80'
                ]
              },
            ].map((category, index) => (
              <motion.div
                key={category.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <Link
                  to={category.to}
                  className="block relative h-64 rounded-2xl overflow-hidden p-8 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="absolute inset-0">
                    <motion.div
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${category.images[0]})` }}
                    />
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${category.images[1]})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70 group-hover:opacity-80 transition-opacity`} />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between text-white drop-shadow-md">
                    <category.icon className="w-12 h-12 mb-4" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/90 mb-4">{category.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                        Explore Collection
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                🔥 Trending Now
              </h2>
              <p className="text-gray-600">Hot picks that everyone's loving</p>
            </div>
            <Link
              to="/trending"
              className="hidden sm:inline-flex items-center gap-2 text-black hover:gap-3 transition-all font-semibold"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <Link
            to="/trending"
            className="sm:hidden flex items-center justify-center gap-2 text-black hover:gap-3 transition-all font-semibold mt-8"
          >
            View All Trending
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked favorites from our latest arrivals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Wardrobe?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us for personalized styling advice and exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+254792430211"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Call +254 792 430211
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/254792430211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                💬 WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
