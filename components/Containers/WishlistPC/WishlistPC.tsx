import styles from './WishlistPC.styles';

function WishlistPC(props: {
    children?: any,
    style: string;
}){
    let currentStyle = props.style
    return (
        <div
        className = {currentStyle=='column' ? styles.column : styles.row}
        >
            {props.children}
        </div>
    );
}

export default WishlistPC;