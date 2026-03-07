import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductImageProps {
  images: string[];
  alt: string;
  isHovered: boolean;
}

export function ProductImage({ images, alt, isHovered }: ProductImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Detect if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile: Random image cycling
  useEffect(() => {
    if (isMobile && images.length > 1) {
      // Random interval between 2-4 seconds
      const randomInterval = Math.random() * 2000 + 2000;
      
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, randomInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isMobile, images.length]);

  // Desktop: Show second image on hover
  useEffect(() => {
    if (!isMobile && images.length > 1) {
      setCurrentImageIndex(isHovered ? 1 : 0);
    }
  }, [isHovered, isMobile, images.length]);

  // If only one image, use simple display
  if (images.length === 1) {
    return (
      <motion.img
        src={images[0]}
        alt={alt}
        className="w-full h-full object-cover"
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={alt}
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: 1, 
            scale: isHovered && !isMobile ? 1.08 : 1 
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            duration: 0.5,
            ease: 'easeInOut'
          }}
        />
      </AnimatePresence>
    </div>
  );
}
