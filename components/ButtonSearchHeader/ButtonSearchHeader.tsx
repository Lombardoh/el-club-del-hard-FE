import styles from './ButtonSearchHeader.styles';
import { BsSearch } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonSearchHeader(){
        return (
            <IconContext.Provider value={{className: styles.searchBar}}>          
                    <BsSearch />
            </IconContext.Provider>
        );
}

export default ButtonSearchHeader;