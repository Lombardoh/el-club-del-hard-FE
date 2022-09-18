import styles from './ButtonSearchHeader.styles';
import { BsSearch } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonSearchHeader(){
        return (
            <div style={{marginTop: '15px'}}>
                <IconContext.Provider value={{className: styles.searchBar}}>          
                    <BsSearch />
                </IconContext.Provider>
            </div>
        );
}

export default ButtonSearchHeader;