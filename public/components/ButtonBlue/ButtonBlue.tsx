import styles from './ButtonBlue.styles';
import Text20P_W from '../Texts/Center/20P_White/Text20P_W';
import Text24P_W from '../Texts/Center/24P_White/Text24P_W';
import { useState, useEffect } from 'react';

function ButtonBlue(props: {
    alert?: string;
    text: string;
    type: 'button' | 'submit';
    style: string;
    onClick?: any;
    disabled?: boolean
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
            className = {currentStyle=='add' ? styles.add : styles.unavaible}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {windowWidth<1400 ? 
                <Text20P_W text={props.text} /> :
                <Text24P_W text={props.text} />
            }
        </button>
    );
}

export default ButtonBlue;