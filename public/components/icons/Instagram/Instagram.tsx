import styles from './Instagram.styles';
import { BsInstagram } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import NextLink from '../../../../node_modules/next/link';

function Instagram(props: {
  onClick?: any
  }){
  return (
    <button onClick={props.onClick} className={styles.noStyle} type='button'>
      <NextLink href={process.env.INSTAGRAM_URL}>
        <a>
        <IconContext.Provider value={{className: styles.hamburgerMenu}}>
          <BsInstagram color={'#FFFFFF'} />
        </IconContext.Provider>
        </a>
      </NextLink>
    </button>
  );
}

export default Instagram;