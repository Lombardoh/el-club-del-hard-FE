import { NextPage } from 'next';
import DivP10_F_Center from '../components/Containers/GenericContainers/DivP10_F_Center/DivP10_F_Center';
import PageTitle from '../components/Containers/PageTitle/PageTitle';
import ProductCartCard from '../components/Containers/ProductCartCard/ProductCartCard';
import CartSubtotalCard from '../components/Containers/CartSubtotalCard/index';
import React, { useState, useEffect } from 'react';

const Cart: NextPage = () => {

    const [data, setData] = useState([])
    const [dataFetched, setDataFetched] = useState(false)
    const [cartTotal, setCartTotal] = useState(0)
    const axios = require('axios').default;

    
    const getData = () => {        
        axios.get(`${process.env.BACKEND_URL}/api/cart/cart/`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token  ${localStorage.getItem('token')}`
            },   
        }).then(res => {
            setDataFetched(true)
            setData(res.data[1].cart)
            setCartTotal(parseInt(res.data[0].cart_total))
        })
        .catch(err => console.log(err))
    } 

    const childToParent = (price : number) => {
        setCartTotal(cartTotal + price)
        console.log('child data', price)
    }


    useEffect(() => {
        getData();
    }, [dataFetched]);

    return (<>
        <DivP10_F_Center style='column'>
            <PageTitle title='Carrito de Compras' style='center' />
            <div style={{width:'100%',display:'flex',justifyContent:'center', padding:'0px 50px 100px',gap:'50px'}}>
                <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    {data ? data.map((cartItem, key) => {
                        return (<> 
                            {cartItem.product.image ?
                                <div key={`${key}`}>
                                    <ProductCartCard 
                                        childToParent={childToParent}
                                        product_id={cartItem.product.pk}
                                        labelPromo={cartItem.product.label} 
                                        labelPromoStyle={'onSale'} 
                                        labelPromoDisabled={cartItem.product.label != '' ? false : true}
                                        labelStock={'En Stock'}
                                        labelStockStyle={'onStock'}
                                        imageURL={cartItem.product.image}
                                        imageAlt={cartItem.product.alt}
                                        productName={cartItem.product.name}
                                        total_price={cartItem.product_total}
                                        price={cartItem.product.price}
                                        quantity={cartItem.quantity}
                                        wishButtonStyle={'delete'}
                                        cartButtonStyle={'add'}
                                    />
                            </div>: null}
                        </>)
                    }) : 'Loading...'}
                </div>
                <div style={{height:'450px',width:'450px',display:'flex',justifyContent:'center'}}>
                    <CartSubtotalCard title='Total de Productos' price={cartTotal.toString()}/>
                </div>
            </div>
        </DivP10_F_Center>
    </>)
}
export default Cart; 