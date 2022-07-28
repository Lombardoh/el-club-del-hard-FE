import styles from './WishlistMC.styles';

function WishlistMC(props: {
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

export default WishlistMC;