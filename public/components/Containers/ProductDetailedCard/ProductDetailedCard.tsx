import styles from './ProductDetailedCard.styles';
import Image from '../../../../node_modules/next/image';
import ProductCardRow from '../ProductCardRow/ProductCardRow';
import LabelPromo from '../../LabelPromo/LabelPromo';
import LabelPromo2nd from '../../LabelPromo2nd/LabelPromo2nd';
import LabelStock from '../../LabelStock/LabelStock';
import Text24P_B from '../../Texts/Center/24P_Bold/Text24P_B';
import L_Text40P_B from '../../Texts/Left/40P_Bold/L_Text40P_B';
import DivP10_F_Center from '../GenericContainers/DivP10_F_Center/DivP10_F_Center';
import L_Text24P from '../../Texts/Left/24P/L_Text24P';
import ButtonArrow from '../../ButtonArrow/ButtonArrow';
import { useState, useEffect } from 'react';
import ButtonCart from '../../ButtonCart/ButtonCart';

function ProductDetailedCard(props: {
		cartClicked:any,
    product_pk: number,
    labelPromo: string,
    labelPromoStyle: string,
    labelPromo2nd: string,
    labelPromo2ndStyle: string,
    labelPromoDisabled: boolean,
    labelStock: string,
    labelStockStyle: string,
    imageURL: string,
    imageAlt?: string,
    productName: string,
    description?: string,
    price: string,
})
{
    const [quantity, setQuantity] = useState<number>(1)

    const checkQuantity = (action) => {
        fetch(`${process.env.BACKEND_URL_API}store/products/${props.product_pk}`, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              },
          })
          .then(res => res.json())
          .then(data => {
              if(data.quantity < eval(`${quantity} ${action} 1`)) return
              setQuantity(eval(`${quantity} ${action} 1`))
          })
          .catch(err => console.log(err))
      }

    const changeQuantity = (action) => {
      if(eval(`${quantity} ${action} 1`) === 0)
        return
        checkQuantity(action)
    }

		const addToCart = () => {

		}

    return (
        <div
            className = {styles.container}
        >
            <div style={{
                padding:'50px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)'
            }}>
                <Image
                src={props.imageURL}
                alt={props.imageAlt}
                width={560}
                height={400}
            />
            </div>

            <div style={{
                display:'flex',
                flexDirection:'column',
                width:'100%',
                gap:'15px'
            }}>
                <ProductCardRow disabled={props.labelPromoDisabled}>
                    <div style={{
                        display:'flex',
                        gap:'25px',
                    }}>
                        <LabelPromo 
                            text={props.labelPromo} 
                            disabled={props.labelPromoDisabled} 
                            style={props.labelPromoStyle} />
                        <LabelPromo2nd
                            text={props.labelPromo2nd} 
                            disabled={props.labelPromoDisabled} 
                            style={props.labelPromo2ndStyle} />
                    </div>
                    <LabelStock 
                        text={props.labelStock} 
                        disabled={false} 
                        style={props.labelStockStyle}/>
                </ProductCardRow>
                
                <DivP10_F_Center style='row'>
                    <L_Text40P_B text={props.productName} />
                </DivP10_F_Center>
                
                <div style={{padding:'25px 100px'}}>
                    <L_Text24P text={props.description} />
                </div>

                <div style={{display:'flex',flexDirection:'row',gap:'50px',justifyContent:'center',alignItems:'center'}}>
                    <Text24P_B text={props.price} />
                    <div style={{display:'flex',flexDirection:'row',gap:'20px',justifyContent:'center',alignItems:'center'}}>
                        <ButtonArrow 
                            text={'-'}
                            style={'buttonAddSub'}
                            onClick={() => changeQuantity('-')}
                        />
                        <L_Text24P text={`${quantity}`}/>
                        <ButtonArrow 
                            text={'+'}
                            style={'buttonAddSub'}
                            onClick={() => changeQuantity('+')}
                        />
                    </div>

                    <div style={{display:'flex',flexDirection:'row',gap:'50px',padding:'0px 100px'}}>
                        {/* <ButtonWishlist product_pk={1} /> */}
                        <ButtonCart quantity={quantity} cartClicked={props.cartClicked} product_pk={props.product_pk}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailedCard;