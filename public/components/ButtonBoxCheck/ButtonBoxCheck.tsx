import styles from './ButtonBoxCheck.styles';
import { BsSquare, BsCheckSquare } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonBoxCheck(props: {

}){
    const [clicked, setClicked] = useState<boolean>(false)
        return (
            <IconContext.Provider value={{className: 'shared-class', size: "20"}}>
                <div
                    onClick = { () => setClicked(!clicked)}
                    className = {styles.cart}
                >
                    {clicked ? <BsCheckSquare /> : <BsSquare />}
                </div>
            </IconContext.Provider>
        );
}

export default ButtonBoxCheck;