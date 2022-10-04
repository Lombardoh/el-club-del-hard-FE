import styles from './TempMessage.styles';
import React, {useEffect, useState} from 'react';
import Text18P_B from '../Texts/Center/18P_B/Text18P_B';

function TempMessage(props: {
    enabled: boolean,
}){
    const [user, setUser] = useState(null);
    const [text, setText] = useState<string>();
    const [error, setError] = useState<boolean>(false);
    
    useEffect(() => {
        if(localStorage.getItem('username')){
            setUser(localStorage.getItem('username'))
        }
    }, []); 

    useEffect(()=>{
        setText(user ? 'El producto fue agregado al carrito' : 'Debe estar logueado para poder agregar al carrito')
        setError(user ? false : true)
    }, [user])

    return (<>
    {props.enabled ?
    <div className={error ? styles.message + ' ' + styles.error : styles.message}>
            <Text18P_B color={'white'} text={text} />
        </div> 
    : null}
    </>     
    );
}

export default TempMessage;