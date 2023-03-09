import { Box, CardProps, useStyleConfig } from '@chakra-ui/react'

function Card(props: CardProps) {
	const { variant, ...rest } = props

	const styles = useStyleConfig('Card', { variant })

	return (
		<Box
			__css={styles}
			{...rest}
		/>
	)
}

export default Card
