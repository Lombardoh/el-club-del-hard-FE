import styles from './ButtonArrow.styles';
function ButtonArrow(props: {
    text: string;
    disabled?: boolean;
    style: string;
    right?: boolean;
    onClick: Function;
}){
    let currentStyle =  props.style === "buttonArrow" ? 
    props.right ? styles.buttonArrow + ' ' + styles.right : styles.buttonArrow 
    : styles.buttonAddSub
    return (
        <div
            onClick = { () => props.onClick()}
            className = {currentStyle}
        >
            {props.disabled ? null : props.text}
        </div>
    );
}

export default ButtonArrow;