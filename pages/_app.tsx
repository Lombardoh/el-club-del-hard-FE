import { AppProps } from 'next/app'
import '../styles/globals.css'
import HeaderTop from '../components/Containers/HeaderTop/HeaderTop'
import NavBar from '../components/Containers/NavBar/NavBar'
import FooterFullContainer from '../components/Containers/FooterFullContainer/FooterFullContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <HeaderTop />
  <NavBar />
  <Component {...pageProps}/>
  <FooterFullContainer />
  </>
}

export default MyApp
