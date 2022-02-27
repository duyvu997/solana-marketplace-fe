import type { AppProps } from 'next/app'
import '../styles/index.less';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
