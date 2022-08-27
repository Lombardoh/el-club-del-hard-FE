import styles from './LabelBreakerCheckout.styles';
function LabelBreakerCheckout(props: {
    text?: string;
    disabled?: boolean;
    style: string;
}){
    let currentStyle = props.style
    return (
        <div
            className = {currentStyle === "horizontalBreaker" ? styles.horizontalBreaker: styles.verticalBreaker}
        >
            {props.disabled ? null : props.text}
        </div>
    );
}

export default LabelBreakerCheckout;