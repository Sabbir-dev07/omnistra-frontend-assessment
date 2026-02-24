import { useState, useEffect } from 'react';

/**
 * Custom hook to track window scroll position.
 * Returns a boolean indicating if the scroll threshold has been met.
 * @param {number} threshold - The pixel value at which 'scrolled' becomes true.
 * @returns {boolean}
 */
export const useScroll = (threshold = 20) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return scrolled;
};
