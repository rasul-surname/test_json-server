import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from '@/theme'
import Head from 'next/head'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
					},
				},
			})
	)

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />

				<ChakraBaseProvider theme={theme}>
					<Head>
						<title>Test json-server</title>
					</Head>
					<Component {...pageProps} />
				</ChakraBaseProvider>
			</QueryClientProvider>
		</>
	)
}

export default App
