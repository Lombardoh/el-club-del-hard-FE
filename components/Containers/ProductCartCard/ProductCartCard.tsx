import styles from './ProductCartCard.styles';
import Image from '../../../node_modules/next/image';
import Text24P_B from '../../Texts/Center/24P_Bold/Text24P_B';
import DivP10_F_Center from '../GenericContainers/DivP10_F_Center/DivP10_F_Center';
import L_Text24P from '../../Texts/Left/24P/L_Text24P';
import ButtonBlueDelete from '../../ButtonBlueDelete/ButtonBlueDelete';
import ButtonArrow from '../../ButtonArrow/ButtonArrow';

import WishlistPC from '../WishlistPC/WishlistPC';
import WishlistBC from '../WishlistBC/WishlistBC';

function ProductCartCard(props: {
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
                    width={140}
                    height={100}
                />
            </div>
            <div>
                <DivP10_F_Center style='row'>
                    <L_Text24P text={props.productName} />
                </DivP10_F_Center>
            </div>
            <WishlistPC style='row'>
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
                width:'300px',
                height:'200px',
            }}>
                <WishlistBC>
                    <ButtonBlueDelete text='Eliminar del Carrito' alert='Producto Eliminado' onClick={Function} style={props.wishButtonStyle} type='button'/>
                </WishlistBC>
            </div>
        </div>
    );
}

export default ProductCartCard;