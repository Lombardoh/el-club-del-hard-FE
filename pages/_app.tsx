import { AppProps } from '../node_modules/next/app'
import '../styles/globals.css'
import TopBar from '../components/Containers/TopBar/TopBar'
import FooterFullContainer from '../components/Containers/FooterFullContainer/FooterFullContainer'
import Image from '../node_modules/next/image';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <TopBar />
  <Image
      width={1920}
      height={268}
      src={require('./banner.png')}
    />
  <Component {...pageProps}/>
  <FooterFullContainer />
  </>
}

export default MyApp
