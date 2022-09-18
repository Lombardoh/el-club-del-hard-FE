import styles from './NavBar.styles';
import {useEffect, useState} from 'react';
import NextLink from '../../../../node_modules/next/link';

function NavBar(props:{
    open?: boolean
}){
    const [buttonTextDisabled, setButtonTextDisabled] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        setButtonTextDisabled(window.innerWidth < 495);
        if(window.innerWidth){
            setUser(localStorage.getItem('username'))
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

    let currentNavStyle = props.open ? styles.nav + ' ' + styles.open : styles.nav;
    
    return (
        <div className = {styles.container}>
            <div className={currentNavStyle}>
            <NextLink href='/ProductCategory' className={styles.link} >
                    <a className={styles.text}>Categorias</a>
                </NextLink>
                {user ? 
                    <NextLink href='/UserPageInfo' >
                    {/* <a className={styles.text}>Bienvenido {user}</a> */}
                    <a className={styles.text}>Bienvenido {user}</a>
                    </NextLink>
                    :
                    <NextLink href='/Login' >
                        <a className={styles.text}>Ingresar</a>
                    </NextLink>  
                }
                {user ?
                <NextLink href='/' >
                <a className={styles.text} onClick={handleClick}>Salir</a>
            </NextLink> : null}
            </div>     
        </div>
    );
}

export default NavBar;