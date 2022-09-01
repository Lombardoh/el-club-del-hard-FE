import styles from './SubtotalCardMC.styles';

function SubtotalCardMC(props: {
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

export default SubtotalCardMC;