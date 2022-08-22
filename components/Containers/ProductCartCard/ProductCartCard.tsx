import styles from './ProductCartCard.styles';
import Image from '../../../node_modules/next/image';
import Text24P_B from '../../Texts/Center/24P_Bold/Text24P_B';
import DivP10_F_Center from '../GenericContainers/DivP10_F_Center/DivP10_F_Center';
import L_Text24P from '../../Texts/Left/24P/L_Text24P';
import ButtonBlueDelete from '../../ButtonBlueDelete/ButtonBlueDelete';
import ButtonArrow from '../../ButtonArrow/ButtonArrow';
import WishlistPC from '../WishlistPC/WishlistPC';
import WishlistBC from '../WishlistBC/WishlistBC';
import {useState} from 'react';

function ProductCartCard(props: {
    product_id: number,
    quantity: number,
    labelPromo: string,
    labelPromoStyle: string,
    labelPromoDisabled: boolean,
    labelStock: string,
    labelStockStyle: string,
    imageURL: string,
    imageAlt?: string,
    productName: string,
    price: number,
    total_price: number;
    wishButtonStyle: string,
    cartButtonStyle: string,
})
{
    const axios = require('axios').default;
    const [cartQuantity, setCartQuantity] = useState(props.quantity);
    const [totalPrice, setTotalPrice ] = useState(props.total_price)
    let price = props.price;

    const sendData = (action) => {        
    let quantity = action === '+' ? 1 : action === '-' ? -1: 0;
    axios.post(`${process.env.BACKEND_URL}/api/cart/cart/`,
        {   
            product: props.product_id,
            quantity: quantity
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token  ${localStorage.getItem('token')}`
            },   
        })
        .then(res => {
            setCartQuantity(cartQuantity + quantity)
            setTotalPrice(eval(totalPrice + action + price))
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    const handleClick = (action) => {
        sendData(action)
    }

    const handleDelete = () => {
        const confirmBox = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
        if(confirmBox) {
            sendData('/')
        }
    }

    return (
        <div
            className = {styles.container}
        >
            <div style={{padding:'10px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                <Image
                    src={props.imageURL}
                    alt={props.imageAlt}
                    width={140}
                    height={100}
                />
            </div>
            <div>
                <DivP10_F_Center style='row'>
                    <L_Text24P text={props.productName} />
                </DivP10_F_Center>
            </div>
            <WishlistPC style='row'>
                <Text24P_B text={totalPrice.toString()} />
                <WishlistBC>
                    <ButtonArrow 
                        text={'-'}
                        style={'buttonAddSub'}
                        onClick={() => handleClick('-')}
                    />
                    <L_Text24P text={cartQuantity.toString()}/>
                    <ButtonArrow 
                        text={'+'}
                        style={'buttonAddSub'}
                        onClick={() => handleClick('+')}
                    />
                </WishlistBC>
            </WishlistPC>
                    
            <div style={{
                width:'300px',
                height:'200px',
            }}>
                <WishlistBC>
                    <ButtonBlueDelete 
                        text='Eliminar del Carrito' 
                        alert='Producto Eliminado' 
                        onClick={handleDelete} 
                        style={props.wishButtonStyle} 
                        type='button'
                        />
                </WishlistBC>
            </div>
        </div>
    );
}

export default ProductCartCard;