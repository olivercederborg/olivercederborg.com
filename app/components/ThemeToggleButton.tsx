import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { ComponentPropsWithRef, FC, useMemo } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useTheme } from '~/hooks/useTheme'

export const ThemeToggleButton: FC = () => {
	const { theme, toggleTheme } = useTheme()
	const isDarkMode = useMemo(() => theme === 'dark', [theme])

	return (
		<AnimatePresence exitBeforeEnter>
			{isDarkMode ? (
				<IconButton
					key='light-mode'
					className='hover:text-primary-brand text-dark-400 dark:text-dark-300 hover:text-dark-500 dark:hover:text-dark-200 overflow-hidden'
					onClick={toggleTheme}
				>
					<MdOutlineLightMode title='Light mode' size={24} />
				</IconButton>
			) : (
				<IconButton
					key='dark-mode'
					className='hover:text-primary-brand text-dark-400 dark:text-dark-300 hover:text-dark-500 dark:hover:text-dark-200 overflow-hidden'
					onClick={toggleTheme}
				>
					<MdOutlineDarkMode title='Dark mode' size={24} />
				</IconButton>
			)}
		</AnimatePresence>
	)
}

type IconButtonProps = HTMLMotionProps<'button'> & ComponentPropsWithRef<'button'>
const IconButton: FC<IconButtonProps> = ({ children, ...props }) => (
	<motion.button
		{...props}
		initial={{ opacity: 0, rotate: -65, originY: '150%', originX: 0.5 }}
		animate={{ opacity: 1, rotate: 0 }}
		exit={{ opacity: 0, rotate: 65 }}
		transition={{ duration: 0.75, ease: 'backOut' }}
	>
		{children}
	</motion.button>
)
IconButton.displayName = 'IconButton'
