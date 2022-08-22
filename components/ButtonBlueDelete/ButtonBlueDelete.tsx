import styles from './ButtonBlueDelete.styles';
import Text16P_W from '../Texts/Center/16P_White/Text16P_W';
function ButtonBlueDelete(props: {
    alert?: string;
    text: string;
    type: 'button' | 'submit';
    style: string;
    onClick?: Function;
}){
    let currentStyle = props.style
    return (
        <button
            className = {currentStyle=='add' ? styles.delete : styles.unavaible}
            type={props.type}
            onClick={() => props.onClick()}
        >
            <Text16P_W text={props.text} />
        </button>
    );
}

export default ButtonBlueDelete;