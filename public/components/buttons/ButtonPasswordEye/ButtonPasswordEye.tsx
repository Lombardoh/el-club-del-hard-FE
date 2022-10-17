import styles from './ButtonPasswordEye.styles';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonPasswordEye(props: {
    handlePasswordVisible?: any
}){
    const [shown, setShown] = useState<boolean>(false)

    const handleClick = () =>{
        props.handlePasswordVisible()
        setShown(!shown)
    }
        return (
            <IconContext.Provider value={{className: 'shared-class', size: "30"}}>
                <div
                    onClick = {handleClick}
                    className = {styles.current}
                >
                    {shown ? <BsEyeSlashFill /> : <BsEyeFill />}
                </div>
            </IconContext.Provider>
        );
}

export default ButtonPasswordEye;