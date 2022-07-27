import styles from './ProductRow.styles';
import Text36P_L from '../../Texts/Left/36P_Bold/L_Text36P_B';
import ProductCard from '../ProductCard/ProductCard';
import ButtonArrow from '../../ButtonArrow/ButtonArrow';

function ProductRow(props: {
    title: string,
    style: string,
}){
    let currentStyle = props.style
    return (
        <div
            className = {currentStyle === "left" ? styles.left: styles.center}
        >
            <Text36P_L text={props.title}/>
            <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"20px",
            gap:"20px",
            }}>
                <ButtonArrow 
                    text={'◀'}
                    style={'buttonArrow'}
                    onClick={Function}
                />
                <ProductCard 
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'} 
                    labelPromoDisabled={false}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    description={'¡12 Cuotas sin Interés!'}
                    price={'$ 1400.00'}
                />
                <ProductCard 
                    labelPromo={'Más Vendidos'} 
                    labelPromoStyle={'mostSold'} 
                    labelPromoDisabled={false}
                    labelStock={'Sin Stock'}
                    labelStockStyle={'noStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    description={'¡12 Cuotas sin Interés!'}
                    price={'$ 1400.00'}
                />
                <ProductCard 
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'}
                    labelPromoDisabled={true}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    description={'¡12 Cuotas sin Interés!'}
                    price={'$ 1400.00'}
                />
                <ProductCard 
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'} 
                    labelPromoDisabled={false}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    description={'¡12 Cuotas sin Interés!'}
                    price={'$ 1400.00'}
                />
                <ProductCard 
                    labelPromo={'En Oferta'} 
                    labelPromoStyle={'onSale'}
                    labelPromoDisabled={true}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                    imageAlt={'Product Image'}
                    productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                    description={'¡12 Cuotas sin Interés!'}
                    price={'$ 1400.00'}
                />
                <ButtonArrow 
                    text={'▶'}
                    style={'buttonArrow'}
                    onClick={Function}
                />
            </div>
        </div>
    );
}

export default ProductRow;