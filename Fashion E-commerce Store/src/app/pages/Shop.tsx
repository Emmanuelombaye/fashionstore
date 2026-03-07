import { useState, useMemo } from 'react';
import { useParams } from 'react-router';
import { motion } from 'motion/react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Shop() {
  const { category } = useParams<{ category?: string }>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'name'>('default');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(p => p.subcategory === selectedSubcategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [category, selectedSubcategory, priceRange, sortBy]);

  const subcategories = useMemo(() => {
    const cats = new Set<string>();
    products
      .filter(p => !category || category === 'all' || p.category === category)
      .forEach(p => cats.add(p.subcategory));
    return ['all', ...Array.from(cats)];
  }, [category]);

  const getCategoryTitle = () => {
    if (!category || category === 'all') return 'All Products';
    return category === 'men' ? "Men's Fashion" : category === 'women' ? "Women's Fashion" : 'Shoes Collection';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
            {getCategoryTitle()}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
          </p>
        </motion.div>

        {/* Filters & Sort Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="font-medium">Filters</span>
            </button>

            <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="default">Sort By: Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Subcategory Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {subcategories.map(sub => (
                      <button
                        key={sub}
                        onClick={() => setSelectedSubcategory(sub)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedSubcategory === sub
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {sub === 'all' ? 'All' : sub}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Price Range: KES {priceRange[0].toLocaleString()} - KES {priceRange[1].toLocaleString()}
                  </label>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="20000"
                      step="500"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="20000"
                      step="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
