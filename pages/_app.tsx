import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from '@/theme'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraBaseProvider theme={theme}>
			<Head>
				<title>Test json-server</title>
			</Head>
			<Component {...pageProps} />
		</ChakraBaseProvider>
	)
}

export default App
