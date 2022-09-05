import styles from './ButtonCart.styles';
import { BsCartPlus, BsFillCartCheckFill } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonCart(props: {
    product_pk: number,
}){
    const [onCart, setOnCart] = useState<boolean>(false)
    const axios = require('axios').default;

    const sendData = () => {      
        axios.post(`${process.env.BACKEND_URL_API}cart/cart/`,
        {
            product: props.product_pk,
            quantity: 1
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token  ${localStorage.getItem('token')}`
            },   
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    const handleClick = () => {
        setOnCart(!onCart)
        sendData();
    }

    return (
        <IconContext.Provider value={{className: 'shared-class', size: "35"}}>
            <div
                onClick = {handleClick}
                className = {styles.cart}
            >
                {onCart ? <BsFillCartCheckFill /> : <BsCartPlus />}
            </div>
        </IconContext.Provider>
    );
}

export default ButtonCart;