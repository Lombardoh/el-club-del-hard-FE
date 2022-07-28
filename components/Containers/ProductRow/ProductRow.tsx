import styles from './ProductRow.styles';
import Text36P_L from '../../Texts/Left/36P_Bold/L_Text36P_B';
import ProductCard from '../ProductCard/ProductCard';
import ButtonArrow from '../../ButtonArrow/ButtonArrow';
import { useEffect, useState } from 'react';

function ProductRow(props: {
    title: string,
}){

    const [data, setData] = useState([])
    const getData = () => {        
        fetch(`http://159.203.185.201:8080/api/store/products/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
        .then(data => setData(data.results))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getData();
    }, [data])

    return (
        
        <div
            className = {styles.container}
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
                {data ? data.map((product, key) => {
                    return (<>
                        {product.image ?
                            <ProductCard 
                            key={product.id}
                            labelPromo={product.label} 
                            labelPromoStyle={'onSale'} 
                            labelPromoDisabled={product.label != '' ? false : true}
                            labelStock={'En Stock'}
                            labelStockStyle={'onStock'}
                            imageURL={product.image}
                            imageAlt={product.alt}
                            productName={product.name}
                            description={product.description}
                            price={`$ ${product.price}`}
                        />: null}
                    </>)
                }) : 'Loading...'}
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