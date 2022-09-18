import styles from './ProductRowCategory.styles';
import Text36P_L from '../../Texts/Left/36P_Bold/L_Text36P_B';
import ProductCard from '../ProductCard/ProductCard';

function ProductRowCategory(props: {}){

    return (
        <div
            className = {styles.container}
        >
            <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"20px",
            gap:"20px",
            }}>
                <ProductCard 
                    product_pk={1}
                    cartClicked={Function}
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'} 
                    labelPromoDisabled={false}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    price={'$ 1400.00'}
                />
                <ProductCard 
                    product_pk={1}
                    cartClicked={Function}
                    labelPromo={'Más Vendidos'} 
                    labelPromoStyle={'mostSold'} 
                    labelPromoDisabled={false}
                    labelStock={'Sin Stock'}
                    labelStockStyle={'noStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    price={'$ 1400.00'}
                />
                <ProductCard 
                    product_pk={1}
                    cartClicked={Function}
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'}
                    labelPromoDisabled={true}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    price={'$ 1400.00'}
                />
                <ProductCard 
                    product_pk={1}  
                    cartClicked={Function}
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'} 
                    labelPromoDisabled={false}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    price={'$ 1400.00'}
                />
            </div>
        </div>
    );
}

export default ProductRowCategory;