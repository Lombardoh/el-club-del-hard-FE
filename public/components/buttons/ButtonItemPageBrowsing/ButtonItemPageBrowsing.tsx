import styles from './ButtonItemPageBrowsing.styles';
function ButtonItemPageBrowsing(props: {
    text: string;
    disabled: boolean;
    style: string;
    onClick: Function;
}){
    let currentStyle = props.style
    return (
        <div
            onClick = { () => props.onClick()}
            className = {styles.buttonNumericPageBrowsing}
        >
            {props.disabled ? null : props.text}
        </div>
    );
}

export default ButtonItemPageBrowsing;