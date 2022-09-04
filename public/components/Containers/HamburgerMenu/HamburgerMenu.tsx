import styles from './HamburgerMenu.styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import {IconContext} from 'react-icons';

function HamburgerMenu(props: {
        onClick?: any
        }){
        return (
                <button onClick={props.onClick} className={styles.noStyle} type='button'>
                        <IconContext.Provider value={{className: styles.hamburgerMenu}}>
                                <GiHamburgerMenu color={'#6181BC'} />
                        </IconContext.Provider>
                </button>
        );
}

export default HamburgerMenu;