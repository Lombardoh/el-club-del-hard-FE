import styles from './ButtonWishHeader.styles';
import { BsFillHeartFill } from 'react-icons/bs';
import React from 'react';
import {IconContext} from 'react-icons';
import Link from 'next/link';

function ButtonWishHeader(props: {}){
        return (
            <IconContext.Provider value={{className: 'shared-class', size: "50"}}>
                <div
                    className = {styles.cart}
                >
                    <Link href="/Wishlist">
                        <a><BsFillHeartFill /></a>
                    </Link>
                </div>
            </IconContext.Provider>
        );
}

export default ButtonWishHeader;