import styles from './CartSubtotalCard.styles';
import Text24P_B from '../../Texts/Center/24P_Bold/Text24P_B';
import Text32P_B from '../../Texts/Center/28P_B/Text28P_B';
import ButtonBlue from '../../buttons/ButtonBlue/ButtonBlue';
import { useRouter} from '../../../../node_modules/next/router';
import SelectGeneric from '../../SelectGeneric/SelectGeneric';
import { useState, useEffect } from 'react';

import Text18P_B from '../../Texts/Center/18P_B/Text18P_B';

function ProductWishlistCard(props: {
    title: string,
    price: string,
})
{
    const router = useRouter();
    let checkoutType = '/OtherCheckout';
    const [windowWidth, setWindowWidth] = useState(0);

    const handleChange = (event) =>{
        console.log(event.target.value)
        checkoutType = event.target.value === 'transferencia' ? '/OtherCheckout' : '/MPCheckout'
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if(windowWidth){
            window.addEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
            });
        }
    }, [windowWidth]);

    return (
        <div
            className = {styles.container}
        >
            <div style={{display:'flex',flexDirection:'column', gap:'20px'}}>
                {windowWidth<1400 ? 
                    <Text24P_B text={props.title} /> :
                    <Text32P_B text={props.title} />
                }
                {windowWidth<1400 ? 
                    <Text18P_B text={`$${props.price}`} /> :
                    <Text24P_B text={`$${props.price}`} />
                }
                {windowWidth<1400 ? 
                    <Text24P_B text='Tipo de pago' /> :
                    <Text32P_B text='Tipo de pago' />
                }
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