import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ContextAuthProvider } from '@Context/contextAuth'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ContextAuthProvider>
        <Component {...pageProps} />
      </ContextAuthProvider>
    </QueryClientProvider>
  )
}
export default MyApp
