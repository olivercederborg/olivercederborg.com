import type { Variants } from 'framer-motion'

export const footerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
}

export const footerItemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}
