import styles from './PageNavigationContainer.styles';
import { Children } from 'react';

function PageNavigationContainer(props: {
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

export default PageNavigationContainer;