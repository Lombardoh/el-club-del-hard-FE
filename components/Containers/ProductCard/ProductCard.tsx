import styles from './ProductCard.styles';
import Image from '../../../node_modules/next/image';
import ProductCardRow from '../ProductCardRow/ProductCardRow';
import LabelPromo from '../../LabelPromo/LabelPromo';
import LabelStock from '../../LabelStock/LabelStock';
import Text14P_B from '../../Texts/Center/14P_B/Text14P_B';
import Text18P_B from '../../Texts/Center/18P_B/Text18P_B';
import Text18P_B_Price from '../../Texts/Center/18P_B_Price/Text18P_B_Price';
import Text22P_B_Price from '../../Texts/Center/22P_B_Price/Text22P_B_Price';
import Link from '../../../node_modules/next/link';
import ProductCardRowButtons from '../ProductCardRowButtons/index';
import {useState, useEffect} from 'react';

function ProductCard(props: {
    product_pk: number,
    labelPromo: string,
    labelPromoStyle: string,
    labelPromoDisabled: boolean,
    labelStock: string,
    labelStockStyle: string,
    imageURL: string,
    imageAlt?: string,
    productName: string,
    price: string,
})
{
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if(windowWidth){
            window.addEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
            });
        }
    }, [windowWidth]);

    return (
        <div
            className = {styles.container}
        >
            <ProductCardRow disabled={props.labelPromoDisabled}>
                <LabelPromo 
                    text={props.labelPromo} 
                    disabled={props.labelPromoDisabled} 
                    style={props.labelPromoStyle} />
                <LabelStock 
                    text={props.labelStock} 
                    disabled={false} 
                    style={props.labelStockStyle}/>
            </ProductCardRow>
            <Link href={{pathname: '/ProductPage', query:{'product_pk': props.product_pk}}}>
                <a>
                <Image
                    src={props.imageURL}
                    alt={props.imageAlt}
                    width={280}
                    height={200}
                />
                </a>
            </Link>

            <div className = {styles.nameMC}>
                {windowWidth<770 ? 
                    <Text14P_B text={props.productName} /> :
                    <Text18P_B text={props.productName} /> 
                }
            </div>
            <ProductCardRow disabled={false} lastRow={true}>
                {windowWidth<770 ? 
                    <Text18P_B_Price text={props.price} /> :
                    <Text22P_B_Price text={props.price} /> 
                }
                <ProductCardRowButtons product_pk={props.product_pk} />
            </ProductCardRow>
        </div>
    );
}

export default ProductCard;