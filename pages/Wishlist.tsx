import { NextPage } from 'next';
import DivP10_F_Center from '../public/components/Containers/GenericContainers/DivP10_F_Center/DivP10_F_Center';
import PageTitle from '../public/components/Containers/PageTitle/PageTitle';
import ProductWishlistCard from '../public/components/Containers/ProductWishlistCard/ProductWishlistCard';
import WishlistMC from '../public/components/Containers/WishlistMC/WishlistMC';

const Wishlist: NextPage = () => {
    return (<>
        <DivP10_F_Center style='column'>
            <PageTitle title='Lista de Deseados' style='center' />
            <WishlistMC>
                <ProductWishlistCard 
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'}
                    labelPromoDisabled={false}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    price={'$ 1400.00'}
                    wishButtonStyle={'delete'}
                    cartButtonStyle={'add'}
                    />
                <ProductWishlistCard 
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'}
                    labelPromoDisabled={true}
                    labelStock={'Sin Stock'}
                    labelStockStyle={'noStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    price={'$ 1400.00'}
                    wishButtonStyle={'delete'}
                    cartButtonStyle={'unavaible'}
                    />
                <ProductWishlistCard 
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'}
                    labelPromoDisabled={true}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    price={'$ 1400.00'}
                    wishButtonStyle={'delete'}
                    cartButtonStyle={'add'}
                    />
            </WishlistMC>   
        </DivP10_F_Center>
    </>)
}
export default Wishlist; 