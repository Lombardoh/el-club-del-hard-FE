import styles from './ProductFilterContainer.styles';
import { Children } from 'react';

function DefaultMainContainer(props: {
    children?: any,
}){

    return (
        <div
            className = {styles.container}
        >
            {props.children}
        </div>
    );
}

export default DefaultMainContainer;