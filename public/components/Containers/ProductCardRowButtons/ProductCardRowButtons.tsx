import styles from './ProductCardRowButtons.styles';
import ButtonWishlist from '../../ButtonWishlist/ButtonWishlist';
import ButtonCart from '../../ButtonCart/ButtonCart';

function ProductCardRowButtons(props: {
    children?: any,
    product_pk: number,
    cartClicked: any
})
{
    return (
        <div
            className = {styles.container}
        >
            {/* <ButtonWishlist product_pk={props.product_pk}/> */}
            <ButtonCart cartClicked={props.cartClicked} product_pk={props.product_pk}/>
        </div>
    );
}

export default ProductCardRowButtons;