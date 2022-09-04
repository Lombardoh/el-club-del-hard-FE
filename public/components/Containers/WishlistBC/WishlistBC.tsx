import styles from './WishlistBC.styles';

function WishlistBC(props: {
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

export default WishlistBC;