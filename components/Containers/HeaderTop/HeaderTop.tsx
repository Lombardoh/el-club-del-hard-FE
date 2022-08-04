import styles from './HeaderTop.styles';
import ButtonCartHeader from '../../ButtonCartHeader/ButtonCartHeader';
import ButtonWishHeader from '../../ButtonWishHeader/ButtonWishHeader';
import ButtonSearchHeader from '../../ButtonSearchHeader/ButtonSearchHeader';
import Image from '../../../node_modules/next/image';
import HamburgerMenu from '../../Containers/HamburgerMenu/HamburgerMenu';
import Link from 'next/link';

function HeaderTop(props: {}){
    
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
                    <ButtonSearchHeader />
                </div>
                <div className={styles.rightMenu}>
                    <ButtonWishHeader />
                    <ButtonCartHeader />
                </div>
                <div className={styles.hamburgerMenu}>
                    <HamburgerMenu />
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;