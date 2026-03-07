import { Link } from 'react-router';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">JosephCashFashion</h3>
            <p className="text-gray-400 text-sm mb-4">
              Your premier destination for trending fashion. Quality clothing and shoes for men and women.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/shop/men" className="hover:text-white transition-colors">
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link to="/shop/women" className="hover:text-white transition-colors">
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link to="/shop/shoes" className="hover:text-white transition-colors">
                  Shoes Collection
                </Link>
              </li>
              <li>
                <Link to="/trending" className="hover:text-white transition-colors">
                  Trending Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+254792430211" className="hover:text-white transition-colors">
                  +254 792 430211
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@josephcash.com" className="hover:text-white transition-colors">
                  info@josephcash.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} JosephCashFashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
