import styles from './CartSubtotalCard.styles';
import Text24P_B from '../../Texts/Center/24P_Bold/Text24P_B';
import Text32P_B from '../../Texts/Center/28P_B/Text28P_B';
import ButtonBlue from '../../ButtonBlue/ButtonBlue';

function ProductWishlistCard(props: {
    title: string,
    price: string,
})
{
    return (
        <div
            className = {styles.container}
        >
            <div style={{display:'flex',flexDirection:'column', gap:'50px'}}>
                <Text32P_B text={props.title} />
                <Text24P_B text={props.price} />
            </div>
            <ButtonBlue text='Finalizar la Compra' onClick={()=>console.log('click')}style='add' type='button'/>
        </div>
    );
}

export default ProductWishlistCard;