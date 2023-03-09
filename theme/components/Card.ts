import { defineStyleConfig } from '@chakra-ui/react'

const Card = defineStyleConfig({
	baseStyle: {
		display: 'flex',
		flexDirection: 'column',
		background: 'white',
		alignItems: 'flex-start',
		gap: 1,
	},
	variants: {
		rounded: {
			padding: 6,
			borderRadius: 'xl',
			boxShadow: 'xl',
		},
		smooth: {
			padding: 2,
			borderRadius: 'base',
			boxShadow: 'md',
		},
	},
	defaultProps: {
		variant: 'smooth',
	},
})

export default Card
