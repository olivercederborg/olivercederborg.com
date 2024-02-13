'use client'

import type { Variants } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useScrollspy } from 'use-scrollspy'

import { useEffect, useRef, useState } from 'react'

import { Logo } from '@components/logo'
import { ThemeToggleButton } from '@components/theme-toggle-button'
import { useClickAway } from '@hooks/use-click-away'
import { useLockBody } from '@hooks/use-lock-body'
import { usePathname } from 'next/navigation'

const navVariants: Variants = {
  hidden: {
    x: '100%',
    transition: {
      duration: 0.2,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: 'afterChildren',
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
}

const linkVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'circOut',
    },
  },
}

const MotionLink = motion(Link)

export function MobileNav() {
  const navRef = useRef<HTMLElement>(null)
  const navToggleRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggle = () => setIsOpen(open => !open)

  const activeId = useScrollspy({
    ids: ['intro', 'projects', 'about', 'contact'],
    hrefs: ['/#intro', '/#projects', '/#about', '/#contact'],
    offset: 'topCenter',
    activeClass: 'active-nav-link',
  })

  useClickAway([navRef, navToggleRef], () => setIsOpen(false))

  useEffect(() => setIsOpen(false), [activeId, pathname])

  useLockBody(isOpen)
  return (
    <>
      <Link href='/#' className='fixed top-8 left-4 z-30 md:hidden'>
        <Logo height={36} />
      </Link>

      <button
        ref={navToggleRef}
        type='button'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={toggle}
        className='fixed top-8 right-4 z-30 text-dark-100 mix-blend-difference hover:opacity-60 dark:text-white md:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-8 w-8'
        >
          <AnimatePresence>
            {isOpen ? (
              <motion.path
                key='close'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                exit={{ pathOffset: 1 }}
                transition={{ duration: 1, ease: 'circOut' }}
                strokeLinecap='square'
                strokeWidth={1.5}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <motion.path
                key='open'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                exit={{ pathOffset: 1 }}
                transition={{ duration: 1, ease: 'circOut' }}
                strokeLinecap='square'
                strokeWidth={1.5}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </AnimatePresence>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={navRef}
            variants={navVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='fixed inset-y-0 right-0 z-20 flex w-9/12 flex-col bg-dark-100 px-12 transition-colors dark:bg-dark-700 md:hidden h-full flex-wrap items-start justify-center gap-y-14'
          >
            <MotionLink href='/#intro' variants={linkVariants} className='mobile-nav-link'>
              Introduction
            </MotionLink>
            <MotionLink href='/#projects' variants={linkVariants} className='mobile-nav-link'>
              Projects
            </MotionLink>
            <MotionLink href='/#about' variants={linkVariants} className='mobile-nav-link'>
              About
            </MotionLink>
            <MotionLink href='/#contact' variants={linkVariants} className='mobile-nav-link'>
              Contact
            </MotionLink>
            <motion.div variants={linkVariants}>
              <ThemeToggleButton />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
