import '../styles/global.scss';
import { AppProps } from 'next/app'
import {Provider as NextAppProvider} from 'next-auth/client'
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAppProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAppProvider>
  )
}

export default MyApp
