import styles from './ProductRow.styles';
import Text36P_L from '../../Texts/Left/36P_Bold/L_Text36P_B';
import ProductCard from '../ProductCard/ProductCard';
import ButtonArrow from '../../ButtonArrow/ButtonArrow';
import { useEffect, useState } from 'react';

function ProductRow(props: {
    title: string,
    style: string,
    cartClicked: any
}){
    let currentStyle = props.style
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [data, setData] = useState([])
    const [dataFetched, setDataFetched] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    let displacement = 320;

    const getData = () => {       
        fetch(`${process.env.BACKEND_URL_API}store/products/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            setData(data.results)
            setDataFetched(true)
        })
        .catch(err => console.log(err))
    }   

    const handleClick = (action) => {
        console.log(activeIndex, 'test')
        setActiveIndex(eval(`${activeIndex} ${action} 1`))
        if (activeIndex > 4) setActiveIndex(0);
        if (activeIndex < 0) setActiveIndex(4);
    }

    useEffect(() => {
        getData();
    }, [dataFetched])
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if(windowWidth){
            window.addEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
                if (window.innerWidth > 1370) {
                    displacement = 320
                } else if (window.innerWidth > 760) {
                    displacement = 255
                } else if (window.innerWidth > 370) {
                    displacement = 191
                } else {displacement = 155}
            });
        }
    }, [windowWidth]);
    
    return (
        
        <div
            className = {currentStyle === "left" ? styles.left: styles.center}
        >
            <Text36P_L text={props.title}/>
            <div className={styles.productRow}>
                <ButtonArrow 
                    text={'◀'}
                    style={'buttonArrow'}
                    onClick={() => handleClick('-')}
                />
                <div className={styles.carousel}>
                    {data ? data.map((product, key) => {
                        return (<>
                            {product.image ? 
                                <div key={`${key}`} style={{transition: 'transform 0.3s',
                                transform: `translateX(-${activeIndex*displacement}px)`,}}>
                                    <ProductCard
                                        key={key}
                                        cartClicked={props.cartClicked}
                                        product_pk={product.pk}
                                        labelPromo={product.label} 
                                        labelPromoStyle={'onSale'} 
                                        labelPromoDisabled={product.label != '' ? false : true}
                                        labelStock={'En Stock'}
                                        labelStockStyle={'onStock'}
                                        imageURL={product.image.replace('http','https')}
                                        imageAlt={product.alt}
                                        productName={product.name}
                                        price={`$ ${product.price}`}
                                    />
                                </div> : null}
                        </>)
                    }) : 'Loading...'}
                </div>
                <ButtonArrow 
                    right={true}
                    text={'▶'}
                    style={'buttonArrow'}
                    onClick={() => handleClick('+')}
                />
            </div>
        </div>
    );
}

export default ProductRow;