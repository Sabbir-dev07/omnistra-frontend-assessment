export const transitions = {
    spring: { type: 'spring', stiffness: 100, damping: 20 },
    premium: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    smooth: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
    fast: { duration: 0.2, ease: 'easeOut' },
    slow: { duration: 12, repeat: Infinity, ease: 'linear' },
};

export const variants = {
    fadeUp: (delay = 0, y = 40) => ({
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { ...transitions.premium, delay },
    }),

    staggerContainer: (staggerChildren = 0.1, delayChildren = 0) => ({
        initial: {},
        animate: {
            transition: {
                staggerChildren,
                delayChildren,
            },
        },
    }),

    scrollReveal: {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-10% 0px -10% 0px' },
        transition: transitions.premium,
    },

    cardHover: {
        initial: { y: 0, scale: 1 },
        hover: {
            y: -6,
            scale: 1.02,
            transition: transitions.smooth,
        },
    },

    buttonPress: {
        tap: { scale: 0.97 },
        hover: { scale: 1.03 },
    },

    parallax: (amount = 20) => ({
        initial: { y: 0 },
        animate: { y: amount },
        transition: { duration: 2, ease: 'linear' }, // This will be handled by useTransform usually
    }),

    shimmer: {
        animate: {
            backgroundPosition: ['200% 0', '-200% 0'],
        },
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
        },
    },
};
