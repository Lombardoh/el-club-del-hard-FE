import styles from './ProductCardRowButtons.styles';
import ButtonCart from '../../buttons/ButtonCart/ButtonCart';

function ProductCardRowButtons(props: {
  children?: any,
  product_pk: number,
  quantity: number,
  cartClicked: any
})
{
  return (
    <div className = {styles.container}>
      <ButtonCart quantity={props.quantity} cartClicked={props.cartClicked} product_pk={props.product_pk}/>
    </div>
  );
}

export default ProductCardRowButtons;