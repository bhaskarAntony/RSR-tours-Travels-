// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import './style.css'; // Create a CSS file for styling
import ApplyNow from '../ApplyNow';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Listen to the scroll event to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > prevScrollY;

      // Check if scrolling direction is down
      setIsVisible(isScrollingDown);

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
   <div className='text-center'>

<div
      className={`scroll-to-top ${isVisible ? 'visible' : ''} `}
      onClick={scrollToTop}
    >
    <ApplyNow text={'Check Avail Cars'}/><i class="bi bi-chevron-double-right"></i>
    </div>
   </div>
  );
};

export default ScrollToTopButton;