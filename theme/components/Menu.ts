import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(['list', 'item'])

const Menu = helpers.defineMultiStyleConfig({
	baseStyle: {
		list: {
			width: '100%',
			boxShadow: 'lg',
			rounded: 'lg',
			flexDirection: 'column',
			py: '2',
		},
		item: {
			fontWeight: 'medium',
			lineHeight: 'normal',
			color: 'gray.600',
		},
	},
	sizes: {
		sm: {
			item: {
				fontSize: '0.75rem',
				px: 2,
				py: 1,
			},
		},
		md: {
			item: {
				fontSize: '0.875rem',
				px: 3,
				py: 2,
			},
		},
	},
	variants: {
		bold: {
			item: {
				fontWeight: 'bold',
			},
			list: {
				boxShadow: 'xl',
			},
		},
		colorful: {
			item: {
				color: 'orange.600',
			},
			list: {
				bg: 'orange.100',
			},
		},
	},
	defaultProps: {
		size: 'md',
	},
})

export default Menu
