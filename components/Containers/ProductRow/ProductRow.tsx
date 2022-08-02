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

    const getData = () => {        
        fetch(`${process.env.BACKEND_URL}/api/store/products/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
        .then(data => setData(data.results))
        .catch(err => console.log(err))
    }   

    const handleClick = (index: number, limit: number) => {
        if (index >= limit){
        index = 0
        }
        setActiveIndex(index);
    }

    useEffect(() => {
        if(data.length === 0){
            getData();
            return
        }
        const interval = setInterval(() => {
            handleClick(activeIndex + 1, data.length/4);
            console.log(data.length)
        }, 3000);
        return () => {
            if(interval){
                clearInterval(interval);
            }
        };
    });
    
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
                            {
                                <div key={`${key}`} style={{transition: 'transform 0.3s',
                                transform: `translateX(-${activeIndex*320}px)`,}}>
                                    <ProductCard
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
                                </div>}
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