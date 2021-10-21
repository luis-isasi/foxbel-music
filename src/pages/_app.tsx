import type { AppProps } from 'next/app'

import { ContextAuthProvider } from '@Context/contextAuth'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextAuthProvider>
      <Component {...pageProps} />
    </ContextAuthProvider>
  )
}
export default MyApp
