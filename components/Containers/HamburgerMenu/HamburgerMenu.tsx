import styles from './HamburgerMenu.styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import {IconContext} from 'react-icons';

function HamburgerMenu(){
        return (
            <IconContext.Provider value={{className: styles.hamburgerMenu}}>
                    <GiHamburgerMenu color={'#6181BC'} />
            </IconContext.Provider>
        );
}

export default HamburgerMenu;