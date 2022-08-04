import { NextPage } from 'next';
import DivP10_F_Center from '../components/Containers/GenericContainers/DivP10_F_Center/DivP10_F_Center';
import PageTitle from '../components/Containers/PageTitle/PageTitle';

import ProductCartCard from '../components/Containers/ProductCartCard/ProductCartCard';
import CartSubtotalCard from '../components/Containers/CartSubtotalCard/index';

const Cart: NextPage = () => {
    return (<>
        <DivP10_F_Center style='column'>
            <PageTitle title='Carrito de Compras' style='center' />
            <div style={{width:'100%',display:'flex',justifyContent:'center', padding:'0px 50px 100px',gap:'50px'}}>
                <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    <ProductCartCard 
                        labelPromo={'En Oferta'} 
                        labelPromoStyle={'onSale'}
                        labelPromoDisabled={false}
                        labelStock={'En Stock'}
                        labelStockStyle={'onStock'}
                        imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                        imageAlt={'Product Image'}
                        productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                        price={'$1400.00'}
                        wishButtonStyle={'delete'}
                        cartButtonStyle={'add'}
                    />
                    <ProductCartCard 
                        labelPromo={'En Oferta'} 
                        labelPromoStyle={'onSale'}
                        labelPromoDisabled={false}
                        labelStock={'En Stock'}
                        labelStockStyle={'onStock'}
                        imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                        imageAlt={'Product Image'}
                        productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                        price={'$1400.00'}
                        wishButtonStyle={'delete'}
                        cartButtonStyle={'add'}
                    />
                    <ProductCartCard 
                        labelPromo={'En Oferta'} 
                        labelPromoStyle={'onSale'}
                        labelPromoDisabled={false}
                        labelStock={'En Stock'}
                        labelStockStyle={'onStock'}
                        imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                        imageAlt={'Product Image'}
                        productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                        price={'$1400.00'}
                        wishButtonStyle={'delete'}
                        cartButtonStyle={'add'}
                    />
                </div>
                <div style={{height:'450px',width:'450px',display:'flex',justifyContent:'center'}}>
                    <CartSubtotalCard title='Subtotal de Productos' price='$ 3200.00'/>
                </div>
            </div>
        </DivP10_F_Center>
    </>)
}
export default Cart; 