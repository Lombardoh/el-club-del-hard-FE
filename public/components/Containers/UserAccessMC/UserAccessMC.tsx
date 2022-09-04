import styles from './UserAccessMC.styles';
import { Children } from 'react';

function UserAccessMC(props: {
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

export default UserAccessMC;