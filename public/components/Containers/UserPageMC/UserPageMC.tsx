import styles from './UserPageMC.styles';

function UserPageMC(props: {
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

export default UserPageMC;