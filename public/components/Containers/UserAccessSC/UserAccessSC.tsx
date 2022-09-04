import styles from './UserAccessSC.styles';
import { Children } from 'react';

function UserAccessSC(props: {
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

export default UserAccessSC;