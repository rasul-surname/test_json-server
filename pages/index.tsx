import ContentLimiter from '@/components/common/ContentLimiter'
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'
import { useUsers } from '@/api/main/routes/users/queries/useUsers'
import Card from '@/components/common/Card'

export default function Home() {
	const { data: users } = useUsers({})

	return (
		<Box {...style.wrapper}>
			<ContentLimiter>
				<VStack spacing="1rem">
					{users?.map(({ name, description, src }, index: number) => (
						<Card
							key={index}
							w="22rem"
							bg="#252838"
							color="white"
						>
							<HStack spacing="1rem">
								<Box maxW="6rem">
									<Avatar
										name="Dan Abrahmov"
										src={src}
									/>
								</Box>
								<Box>
									<Text>{name}</Text>
									<Text fontSize="sm">{description}</Text>
								</Box>
							</HStack>
						</Card>
					))}
				</VStack>
			</ContentLimiter>
		</Box>
	)
}

const style = {
	wrapper: {
		minHeight: '100vh',
		py: '2rem',
		bg: '#343A4F',
	},
}
