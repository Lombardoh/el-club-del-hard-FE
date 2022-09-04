import { AppProps } from '../node_modules/next/app'
import '../styles/globals.css'
import TopBar from '../public/components/Containers/TopBar/TopBar'
import FooterFullContainer from '../public/components/Containers/FooterFullContainer/FooterFullContainer'
import Image from '../node_modules/next/image';
import {useState, useEffect } from 'react';
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if(windowWidth){
            window.addEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
            });
        }
    }, [windowWidth]);

  let mobile = windowWidth > 700 ? false : true;
  return <>
  <Head>
        <title>El club del hard</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
  <TopBar />
  {mobile ?
  <Image
      width={500}
      height={268}
      src={require('./banner-mobile.jpg')}
    />:
  <Image
      width={1920}
      height={268}
      src={require('./banner.png')}
    />
    }
  <Component {...pageProps}/>
  <FooterFullContainer />
  </>
}

export default MyApp
