import { Container, ContainerProps } from '@chakra-ui/react'

function ContentLimiter({ children, ...props }: ContainerProps) {
	return (
		<Container
			position="relative"
			maxWidth="400px"
			margin="0 auto"
			{...props}
		>
			{children}
		</Container>
	)
}

export default ContentLimiter
