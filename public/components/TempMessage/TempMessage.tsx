import styles from './TempMessage.styles';
import { BsCartPlus, BsFillCartCheckFill } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';
import Text18P_B from '../Texts/Center/18P_B/Text18P_B';

function TempMessage(props: {
    enabled: boolean
}){
    return (<>
    {props.enabled ?
    <div className={styles.message}>
            <Text18P_B text='El producto fue agregado al carrito' />
        </div> 
    : null}
    </>     
    );
}

export default TempMessage;