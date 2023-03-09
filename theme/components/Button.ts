import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
	baseStyle: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		borderRadius: 'base',
	},
	sizes: {
		sm: {
			fontSize: 'sm',
			px: 4,
			py: 2,
		},
		md: {
			fontSize: 'md',
			px: 6,
			py: 3,
		},
	},
	variants: {
		outline: {
			border: '2px solid',
			borderColor: 'purple.500',
			color: 'purple.500',
		},
		solid: {
			bg: 'purple.500',
			color: 'white',
		},
		gradient: {
			bgGradient: 'linear(to-r, teal.500, green.500)',
			color: 'white',
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'outline',
	},
})

export default Button
