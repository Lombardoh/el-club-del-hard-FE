import styles from './ButtonBlueDelete.styles';
import Text14P_W from '../Texts/Center/14P_White/Text14P_W';
import Text16P_W from '../Texts/Center/16P_White/Text16P_W';
import { useState, useEffect } from 'react';

function ButtonBlueDelete(props: {
    alert?: string;
    text: string;
    type: 'button' | 'submit';
    style: string;
    onClick?: Function;
}){
    let currentStyle = props.style
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if(windowWidth){
            window.addEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
            });
        }
    }, [windowWidth]);

    return (
        <button
            className = {currentStyle=='add' ? styles.delete : styles.unavaible}
            type={props.type}
            onClick={() => props.onClick()}
        >
            {windowWidth<1400 ? 
                <Text14P_W text={props.text} /> :
                <Text16P_W text={props.text} />
            }
            
        </button>
    );
}

export default ButtonBlueDelete;