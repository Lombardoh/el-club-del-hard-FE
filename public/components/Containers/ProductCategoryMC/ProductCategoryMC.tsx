import styles from './ProductCategoryMC.styles';

function ProductCategoryMC(props: {
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

export default ProductCategoryMC;