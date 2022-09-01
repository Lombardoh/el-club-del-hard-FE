import styles from './CartSubtotalCard.styles';
import Text24P_B from '../../Texts/Center/24P_Bold/Text24P_B';
import Text32P_B from '../../Texts/Center/28P_B/Text28P_B';
import ButtonBlue from '../../ButtonBlue/ButtonBlue';
import { useRouter } from '../../../node_modules/next/router';
import SelectGeneric from '../../SelectGeneric/SelectGeneric';

function ProductWishlistCard(props: {
    title: string,
    price: string,
})
{
    const router = useRouter();
    let checkoutType = '/OtherCheckout'

    const handleChange = (event) =>{
        console.log(event.target.value)
        checkoutType = event.target.value === 'transferencia' ? '/OtherCheckout' : '/MPCheckout'
    }

    return (
        <div
            className = {styles.container}
        >
            <div style={{display:'flex',flexDirection:'column', gap:'20px'}}>
                <Text32P_B text={props.title} />
                <Text24P_B text={`$${props.price}`} />
                <Text32P_B text='Tipo de pago' />
                <SelectGeneric onChangeValue={handleChange}>
                    <option value='transferencia'>Transferencia</option>
                    <option value='tarjeta'>Tarjeta</option>
                </SelectGeneric>
            </div>
            <ButtonBlue text='Finalizar la Compra' onClick={()=>router.push(checkoutType)} style='add' type='button'/>
        </div>
    );
}

export default ProductWishlistCard;