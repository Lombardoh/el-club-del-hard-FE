import styles from './ProductCardRow.styles';

function ProductCardRow(props: {
    children?: any,
    disabled: boolean,
    flex?: 'row' | 'column',
})
{
    return (
        <div
            className = {props.disabled ? styles.noPromo : styles.container}
            style={props.flex ? {flexDirection: props.flex} : {flexDirection: 'row'}}
        >
            {props.children}
        </div>
    );
}

export default ProductCardRow;