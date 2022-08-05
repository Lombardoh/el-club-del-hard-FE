import styles from './FormRegisterContainer.styles';
import UserAccessIC from '../UserAccessIC/UserAccessIC';
import UserAccessSC from '../UserAccessSC/UserAccessSC';
import L_Text20P from '../../Texts/Left/20P/L_Text20P';

import InputGeneric from '../../InputGeneric/InputGeneric';
import ButtonPasswordEye from '../../ButtonPasswordEye/ButtonPasswordEye';
import ButtonBlue from '../../ButtonBlue/ButtonBlue';
import { useRef, useState } from 'react';

import Link from '../../../node_modules/next/link';
import Text16P_B from '../../Texts/Center/16P_Bold/Text16P_B';

function FormRegisterContainer(){
    const axios = require('axios').default;
    const usernameError = useRef(null);
    const emailError = useRef(null);
    const [data, setData] = useState({
        email: '',
        password: '',
        password2: '',
        username: '',
    });
    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {        
        event.preventDefault()
        let body = JSON.stringify(data)
        console.log(body)
        axios.post(`${process.env.BACKEND_URL}/accounts/register`, 
        {   
            email: data.email, 
            username: data.username,
            password: data.password, 
            password2: data.password2
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                }
            })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error.response.status);
            emailError.current.innerHTML = error.response.data.email
            usernameError.current.innerHTML = error.response.data.username;
        })
    }

    const onChangeValueHandler = (event) => {
        handleInputChange(event);
    }
    return (
            <form className={styles.container} 
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
                        <L_Text20P text='Correo Electrónico'/>
                        <InputGeneric 
                            type='email' 
                            name='email' 
                            onChangeValue={onChangeValueHandler} 
                            value={data.email}
                            required={true}
                        />
                        <div ref={emailError} className={styles.errorMsg} />
                    </UserAccessIC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Contraseña'/>
                        <div style={{
                            display:'flex',
                            alignItems:'center',
                            width:'100%',
                            padding:'0px',
                            margin:'-5px 0px',
                            marginBottom:'-25px'
                        }}>
                            <InputGeneric 
                                type='password' 
                                name='password' 
                                onChangeValue={onChangeValueHandler}
                                value={data.password}
                                required={true}
                            />
                            <ButtonPasswordEye />
                        </div>
                    </UserAccessIC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Repita su Contraseña'/>
                        <div style={{
                            display:'flex',
                            alignItems:'center',
                            width:'100%',
                            padding:'0px',
                            margin:'-5px 0px',
                        }}>
                            <InputGeneric 
                                type='password' 
                                name='password2' 
                                onChangeValue={onChangeValueHandler} 
                                value={data.password2}
                                required={true}
                            />
                            <ButtonPasswordEye />
                        </div>
                    </UserAccessIC>
                    <Link href={'/Login'}>
                        <a>
                            <Text16P_B text='¿Ya tenés Cuenta? ¡Ingresa aquí!' />
                        </a>
                    </Link>
                    <div style={{
                        width:'100%',
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:'30px'
                    }}>
                        <ButtonBlue text='Registrarme' type='submit' style='add' />
                    </div>
                </UserAccessSC>
            </form>
            );
    }
        
export default FormRegisterContainer;