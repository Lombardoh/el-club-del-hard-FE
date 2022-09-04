import styles from './CartMC.styles';

function CartMC(props: {
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

export default CartMC;