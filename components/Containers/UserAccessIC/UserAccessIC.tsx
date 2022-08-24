import styles from './UserAccessIC.styles';
import { Children } from 'react';

function UserAccessIC(props: {
    children?: any,
    style: string,
}){
    const currentStyle=props.style
    return (
        <div
            className = {currentStyle === "container" ? styles.container : styles.forToS}
        >
            {props.children}
        </div>
    );
}

export default UserAccessIC;