import styles from './ButtonFilterSelector.styles';
import { BsRecordCircleFill } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';


function ButtonFilterSelector(props: {
    style: string;
    onClick: Function;
}){
    let currentStyle = props.style
    return (
        <IconContext.Provider value={{className: 'shared-class', size: "25"}}>
            <div
                className = {currentStyle=='selected' ? styles.selected : styles.notSelected}
            >
                <BsRecordCircleFill />
            </div>
        </IconContext.Provider>
    );
}

export default ButtonFilterSelector;