import styles from './ProductRow.styles';
import Text36P_L from '../../Texts/Left/36P_Bold/L_Text36P_B';
import ProductCard from '../ProductCard/ProductCard';
import ButtonArrow from '../../ButtonArrow/ButtonArrow';
import { useEffect, useState } from 'react';

function ProductRow(props: {
    title: string,
    style: string,
}){
    let currentStyle = props.style
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, setData] = useState([])
    const [dataFetched, setDataFecthed] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    let displacement = 320;

    const getData = () => {        
        fetch(`${process.env.BACKEND_URL}/api/store/products/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
        .then(data => {
            setData(data.results)
            setDataFecthed(true)
        })
        .catch(err => console.log(err))
    }   

    const handleClick = (index: number, limit: number) => {
        if (index >= limit){
        index = 0
        }
        setActiveIndex(index);
    }

    useEffect(() => {
        getData();
    }, [dataFetched])

    useEffect(() => {
        const interval = setInterval(() => {
            handleClick(activeIndex + 1, data.length-4);
        }, 3000);
        return () => {
            if(interval){
                clearInterval(interval);
            }
        };
    });
    
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
                    onClick={Function}
                />
                <div className={styles.carousel}>
                    {data ? data.map((product, key) => {
                        return (<>
                            {product.image ? 
                                <div key={`${key}`} style={{transition: 'transform 0.3s',
                                transform: `translateX(-${activeIndex*displacement}px)`,}}>
                                    <ProductCard
                                        product_pk={product.pk}
                                        labelPromo={product.label} 
                                        labelPromoStyle={'onSale'} 
                                        labelPromoDisabled={product.label != '' ? false : true}
                                        labelStock={'En Stock'}
                                        labelStockStyle={'onStock'}
                                        imageURL={product.image}
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
                    onClick={Function}
                />
            </div>
        </div>
    );
}

export default ProductRow;