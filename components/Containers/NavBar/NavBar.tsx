import styles from './NavBar.styles';
import {useEffect, useState} from 'react';
import NextLink from '../../../node_modules/next/link';

function NavBar(props: {}){
    const [buttonTextDisabled, setButtonTextDisabled] = useState(false);

    useEffect(() => {
        setButtonTextDisabled(window.innerWidth < 495);
        if(window.innerWidth){
            window.addEventListener('resize', () => {
                setButtonTextDisabled(window.innerWidth < 495);
            });
        }
    }, [buttonTextDisabled]);  

    return (
        <div
            className = {styles.container}
        >
            {buttonTextDisabled ? null :
            <>
                <NextLink href='/categories' className={styles.link} >
                    <a className={styles.text}>Categorias</a>
                </NextLink>
                <NextLink href='/account' >
                    <a className={styles.text}>Mi cuenta</a>
                </NextLink>
                <NextLink href='/help' >
                    <a className={styles.text}>Ayuda</a>
                </NextLink>
            </>}
        </div>
    );
}

export default NavBar;