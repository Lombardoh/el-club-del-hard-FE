import styles from './UserPageSC.styles';

function UserPageSC(props: {
    children?: any,
    style: string,
}){
    const currentStyle=props.style
    return (
        <div
            className = {currentStyle === "row" ? styles.row : styles.column}
        >
            {props.children}
        </div>
    );
}

export default UserPageSC;