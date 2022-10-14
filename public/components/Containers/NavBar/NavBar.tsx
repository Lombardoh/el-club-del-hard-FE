import styles from './NavBar.styles';
import { useEffect, useState } from 'react';
import NextLink from '../../../../node_modules/next/link';

function NavBar(props:{
    open?: boolean
}){
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [buttonTextDisabled, setButtonTextDisabled] = useState(false);

  useEffect(() => {
    setButtonTextDisabled(window.innerWidth < 495);
    if(window.innerWidth){
      setUser(localStorage.getItem('username'))
      setAdmin(localStorage.getItem('is_admin'))
      window.addEventListener('resize', () => {
        setButtonTextDisabled(window.innerWidth < 495);
      });
    }
  }, [buttonTextDisabled]); 

  const handleClick = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('is_admin');
    setUser(null);
    window.location.reload();
  }

  let currentNavStyle = props.open ? styles.nav + ' ' + styles.open : styles.nav;
  return (
    <div className = {styles.container}>
      <div className={currentNavStyle}>
      <NextLink href='/' className={styles.link} >
        <a className={styles.text}>Home</a>
      </NextLink>
      <NextLink href='/productscategory' className={styles.link} >
        <a className={styles.text}>Productos</a>
      </NextLink>
      {admin ?
        <NextLink href='/tools' >
          <a className={styles.text}>Herramientas</a>
        </NextLink> : null}
      {user ?
        <NextLink href='/' >
          <a className={styles.text} onClick={handleClick}>Salir</a>
        </NextLink> : null}
      </div>     
    </div>
  );
}

export default NavBar;