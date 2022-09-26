import styles from './HeaderTop.styles';
import ButtonCartHeader from '../../ButtonCartHeader/ButtonCartHeader';
import ButtonSearchHeader from '../../ButtonSearchHeader/ButtonSearchHeader';
import Image from '../../../../node_modules/next/image';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Link from 'next/link';
import NextLink from '../../../../node_modules/next/link';
import {useEffect, useState} from 'react';

function HeaderTop(props: {
    onClick?: any
    }){

    const [user, setUser] = useState(null);
    const [buttonTextDisabled, setButtonTextDisabled] = useState(false);

    useEffect(() => {
        setButtonTextDisabled(window.innerWidth < 495);
        if(window.innerWidth){
            setUser(localStorage.getItem('username'))
            window.addEventListener('resize', () => {
                setButtonTextDisabled(window.innerWidth < 495);
            });
        }
    }, [buttonTextDisabled]); 
    
    return (
        <div
            className = {styles.container}
        >            
            <div className={styles.logoContainer}>
            <Link href="/">
                <a>
                    <Image
                        src={require('./LogoCDH.png')}
                        alt={'logo'}
                        className={styles.logo}
                    />  
                </a>
            </Link>
                
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.searchBar}>
                    {/* <ButtonSearchHeader /> */}
                </div>
                <div className={styles.rightMenu}>
                    {/* <ButtonWishHeader /> */}
                    <ButtonSearchHeader />
                    <ButtonCartHeader />
                    {user ? 
                      <NextLink href='/UserPageInfo' >
                      {/* <a className={styles.text}>Bienvenido {user}</a> */}
                      <a className={styles.text}>Bienvenido</a>
                      </NextLink>
                      :
                      <NextLink href='/Login' >
                          <a className={styles.text}>Ingresar</a>
                      </NextLink>  
                    }
                </div>
                <div className={styles.hamburgerMenu}>
                    <HamburgerMenu onClick={props.onClick}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;