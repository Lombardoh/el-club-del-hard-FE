import { AppProps } from '../node_modules/next/app'
import '../styles/globals.css'
import TopBar from '../components/Containers/TopBar/TopBar'
import FooterFullContainer from '../components/Containers/FooterFullContainer/FooterFullContainer'
import Image from '../node_modules/next/image';
import {useState, useEffect } from 'react';

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
