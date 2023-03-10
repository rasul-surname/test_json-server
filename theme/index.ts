import { extendBaseTheme } from '@chakra-ui/react'
import components from '@/theme/components'
import styles from '@/theme/styles'
import breakpoints from '@/theme/breakpoints'

const theme = extendBaseTheme({
	fonts: {
		body: '"Roboto", sans-serif',
		heading: '"Roboto", sans-serif',
	},
	breakpoints,
	components,
	styles,
})

export default theme
