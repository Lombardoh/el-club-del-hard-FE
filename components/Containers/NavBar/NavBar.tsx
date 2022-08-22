import styles from './NavBar.styles';
import {useEffect, useState} from 'react';
import NextLink from '../../../node_modules/next/link';

function NavBar(props: {}){
    const [buttonTextDisabled, setButtonTextDisabled] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        setButtonTextDisabled(window.innerWidth < 495);
        if(window.innerWidth){
            console.log('window.innerWidth');
            setUser(localStorage.getItem('username'))
            console.log(user);
            window.addEventListener('resize', () => {
                setButtonTextDisabled(window.innerWidth < 495);
            });
        }
    }, [buttonTextDisabled]);  

    const handleClick = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        setUser(null);
    }

    return (
        <div
            className = {styles.container}
        >
            {buttonTextDisabled ? null :
            <>
                <NextLink href='/ProductCategory' className={styles.link} >
                    <a className={styles.text}>Categorias</a>
                </NextLink>
                {user ? <>
                    <NextLink href='/Profile' >
                    <a className={styles.text}>Bienvenido {user}</a>
                    </NextLink>
                    <NextLink href='/' >
                        <a className={styles.text} onClick={handleClick}>Salir</a>
                    </NextLink> </>:
                    <NextLink href='/Login' >
                        <a className={styles.text}>Ingresar</a>
                    </NextLink>
                }
                
                
                <NextLink href='/help' >
                    <a className={styles.text}>Ayuda</a>
                </NextLink>
            </>}
        </div>
    );
}

export default NavBar;