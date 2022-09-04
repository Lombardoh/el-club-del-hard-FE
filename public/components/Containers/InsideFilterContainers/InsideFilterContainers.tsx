import styles from './InsideFilterContainers.styles';
import { Children } from 'react';

function InsideFilterContainers(props: {
    children?: any,
    style: string;
}){
    let currentStyle = props.style
    return (
        <div
            className = {currentStyle=='outer' ? styles.outer : styles.insider}
        >
            {props.children}
        </div>
    );
}

export default InsideFilterContainers;