import styles from './ButtonWishlist.styles';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonWishlist(props: {
    product_pk: number,
}){
    const [favourite, setFavourite] = useState<boolean>(false)
    return (
        <IconContext.Provider value={{className: 'shared-class', size: "35"}}>
            <div
                onClick = { () => setFavourite(!favourite)}
                className = {styles.wishlist}
            >
                {favourite ? <BsHeartFill /> : <BsHeart />}
            </div>
        </IconContext.Provider>
    );
}

export default ButtonWishlist;