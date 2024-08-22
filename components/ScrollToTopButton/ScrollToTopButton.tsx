import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopButtonProps {
  showAt?: number; // Scroll position at which to show the button
  smooth?: boolean; // Whether to scroll smoothly or not
  className?: string; // Additional class names for styling
}

/**
 * A button that appears when the user scrolls down the page, allowing them to quickly return to the top.
 *
 * @param {ScrollToTopButtonProps} props - The props for the ScrollToTopButton component.
 * @returns {JSX.Element} The rendered ScrollToTopButton component.
 * @example
 * <ScrollToTopButton showAt={100} smooth={true} className="fixed bottom-4 right-4" />
 */
const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ showAt = 100, smooth = true, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > showAt) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [showAt]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black p-2 rounded-full shadow ${className}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
