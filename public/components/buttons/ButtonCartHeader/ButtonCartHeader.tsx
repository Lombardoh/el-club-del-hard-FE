import styles from './ButtonCartHeader.styles';
import { BsFillCartFill } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';
import Link from 'next/link';

function ButtonCartHeader(props: {}){
        return (
            <IconContext.Provider value={{className: 'shared-class', size: "25"}}>
                <div
                    className = {styles.cart}
                >
                    <Link href="/Cart">
                        <a><BsFillCartFill /></a>
                    </Link>
                    
                </div>
            </IconContext.Provider>
        );
}

export default ButtonCartHeader;