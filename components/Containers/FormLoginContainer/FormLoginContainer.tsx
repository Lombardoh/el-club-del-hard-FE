import styles from './FormLoginContainer.styles';
import UserAccessSC from '../UserAccessSC/UserAccessSC';
import UserAccessIC from '../UserAccessIC/UserAccessIC';
import L_Text20P from '../../Texts/Left/20P/L_Text20P';
import InputLoginRegister from '../../InputGeneric/InputGeneric';
import ButtonPasswordEye from '../../ButtonPasswordEye/ButtonPasswordEye';
import ButtonBlue from '../../ButtonBlue/ButtonBlue';
import ClickableContainer from '../ClickableContainer/ClickableContainer';
import ButtonBoxCheck from '../../ButtonBoxCheck/ButtonBoxCheck';
import Text16P from '../../Texts/Center/16P/Text16P';
import Text16P_B from '../../Texts/Center/16P_Bold/Text16P_B';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from '../../../node_modules/next/router';
import InputGeneric from '../../InputGeneric/InputGeneric';
import Link from '../../../node_modules/next/link';

function FormLoginContainer(props: {
    style: string;
}){
    const router = useRouter();
    const axios = require('axios').default;
    const usernameError = useRef(null);
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {        
        event.preventDefault()
        axios.post(`${process.env.BACKEND_URL}/accounts/login`,
        {
            username: data.username,
            password: data.password
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },   
        })
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            router.reload()
        })
        .catch(err => console.log(err))
    }

    const onChangeValueHandler = (event) => {
        handleInputChange(event);
    }

    useEffect(() => {
        localStorage.getItem('token') ? router.push('/') : null;
    });

    return (
            <form
                className = {styles.container}
                onSubmit={sendData}
            >
                <UserAccessSC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Nombre de Usuario'/>
                        <InputGeneric 
                            type='text' 
                            name='username' 
                            onChangeValue={onChangeValueHandler} 
                            value={data.username}
                            required={true}
                        />
                        <div ref={usernameError} className={styles.errorMsg} />
                    </UserAccessIC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Contraseña'/>
                        <div style={{
                            display:'flex',
                            alignItems:'center',
                            width:'100%',
                            padding:'0px',
                            margin:'-5px 0px',
                        }}>
                            <InputLoginRegister 
                                type='password' 
                                name='password'
                                onChangeValue={onChangeValueHandler}
                                value={data.password}
                                required={true}
                                />
                            <ButtonPasswordEye />
                        </div>
                    </UserAccessIC>
                    <div style={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'flex-start',
                        marginTop:'20px',
                        marginRight:'auto',
                        gap:'30px'
                    }}>
                        <ButtonBlue type='submit' text='Login' style='add'  />
                        <ClickableContainer style='row'>
                            <ButtonBoxCheck />
                            <Text16P text='Recuérdame' />
                        </ClickableContainer>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'10px'}}>
                        <Link href={'/Register'}>
                            <a>
                                <Text16P_B text='¿No tenés Cuenta? ¡Resgistrate aquí!' />
                            </a>
                        </Link>
                        <ClickableContainer style='current'>
                            <Text16P_B text='¿Olvidaste tu contraseña?' />
                        </ClickableContainer>
                    </div>
                    
                </UserAccessSC>
            </form>
        );
    }

export default FormLoginContainer;