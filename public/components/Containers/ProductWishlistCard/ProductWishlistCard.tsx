import styles from './ProductWishlistCard.styles';
import Image from '../../../../node_modules/next/image';
import ProductCardRow from '../ProductCardRow/ProductCardRow';
import LabelPromo from '../../LabelPromo/LabelPromo';
import LabelStock from '../../LabelStock/LabelStock';
import Text24P_B from '../../Texts/Center/24P_Bold/Text24P_B';
import DivP10_F_Center from '../GenericContainers/DivP10_F_Center/DivP10_F_Center';
import L_Text24P from '../../Texts/Left/24P/L_Text24P';
import ButtonBlue from '../../ButtonBlue/ButtonBlue';
import ButtonBlueDelete from '../../ButtonBlueDelete/ButtonBlueDelete';
import ButtonArrow from '../../ButtonArrow/ButtonArrow';

import WishlistPC from '../WishlistPC/WishlistPC';
import WishlistBC from '../WishlistBC/WishlistBC';

function ProductWishlistCard(props: {
    labelPromo: string,
    labelPromoStyle: string,
    labelPromoDisabled: boolean,
    labelStock: string,
    labelStockStyle: string,
    imageURL: string,
    imageAlt?: string,
    productName: string,
    price: string,
    wishButtonStyle: string,
    cartButtonStyle: string,
})
{
    return (
        <div
            className = {styles.container}
        >
            <div style={{padding:'10px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                <Image
                    src={props.imageURL}
                    alt={props.imageAlt}
                    width={280}
                    height={200}
                />
            </div>
            <div>
                <DivP10_F_Center style='row'>
                    <L_Text24P text={props.productName} />
                </DivP10_F_Center>
            </div>
            <WishlistPC style='column'>
                <Text24P_B text={props.price} />
                <WishlistBC>
                    <ButtonArrow 
                        text={'-'}
                        style={'buttonAddSub'}
                        onClick={Function}
                    />
                    <L_Text24P text='2'/>
                    <ButtonArrow 
                        text={'+'}
                        style={'buttonAddSub'}
                        onClick={Function}
                    />
                </WishlistBC>
            </WishlistPC>
                    

            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                height:'200px',
            }}>
                <div style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'flex-end',
                        width:'450px'
                }}>
                    <div>
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
                    </div>
                </div>
                <WishlistBC>
                    <ButtonBlueDelete text='Eliminar de Deseados' alert='Producto Eliminado' onClick={Function} style={props.wishButtonStyle} type='button'/>
                    <ButtonBlue text='Añadir al Carrito' alert='Producto Añadido' onClick={Function} style={props.cartButtonStyle} type='button'/>
                </WishlistBC>
            </div>
        </div>
    );
}

export default ProductWishlistCard;