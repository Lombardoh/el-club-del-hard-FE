import styles from './WishlistPC.styles';

function WishlistPC(props: {
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

export default WishlistPC;