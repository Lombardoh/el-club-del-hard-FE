import styles from './ButtonPageNumber.styles';
import Text16P_W from '../Texts/Center/16P_White/Text16P_W';
function ButtonPageNumber(props: {
    indexNumber: string;
    style: string;
    onClick: Function;
}){
    let currentStyle = props.style
    return (
        <div
            onClick = {() => (
                alert('Redirection')
            )}
            className = {currentStyle=='current' ? styles.current : styles.other}
        >
            <Text16P_W text={props.indexNumber} />
        </div>
    );
}

export default ButtonPageNumber;