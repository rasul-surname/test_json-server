import { extendBaseTheme } from '@chakra-ui/react'
import components from '@/theme/components'
import styles from '@/theme/styles'

const theme = extendBaseTheme({
	fonts: {
		body: '"Roboto", sans-serif',
		heading: '"Roboto", sans-serif',
	},
	components,
	styles,
})

export default theme
