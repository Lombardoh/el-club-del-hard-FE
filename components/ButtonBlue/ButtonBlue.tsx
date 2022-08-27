import styles from './ButtonBlue.styles';
import Text24P_W from '../Texts/Center/24P_White/Text24P_W';
function ButtonBlue(props: {
    alert?: string;
    text: string;
    type: 'button' | 'submit';
    style: string;
    onClick?: any;
    disabled?: boolean
}){
    let currentStyle = props.style
    return (
        <button
            className = {currentStyle=='add' ? styles.add : styles.unavaible}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <Text24P_W text={props.text} />
        </button>
    );
}

export default ButtonBlue;