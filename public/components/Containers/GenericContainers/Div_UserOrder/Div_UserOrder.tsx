import styles from './Div_UserOrder.styles';

function Div_UserOrder(props: {
    children?: any,
    style: string
}){
    const currentStyle=props.style
    return (
        <div
            className = {currentStyle=='column' ? styles.column : styles.row}
        >
            {props.children}
        </div>
    );
}

export default Div_UserOrder;