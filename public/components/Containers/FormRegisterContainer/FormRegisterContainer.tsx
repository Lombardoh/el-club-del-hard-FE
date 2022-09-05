import { useEffect, useRef, useState } from 'react';
import styles from './FormRegisterContainer.styles';
import UserAccessIC from '../UserAccessIC/UserAccessIC';
import UserAccessSC from '../UserAccessSC/UserAccessSC';
import L_Text20P from '../../Texts/Left/20P/L_Text20P';
import InputGeneric from '../../InputGeneric/InputGeneric';
import ButtonPasswordEye from '../../ButtonPasswordEye/ButtonPasswordEye';
import ButtonBlue from '../../ButtonBlue/ButtonBlue';
import Link from '../../../../node_modules/next/link';
import Text16P_B from '../../Texts/Center/16P_Bold/Text16P_B';
import { useRouter } from '../../../../node_modules/next/router';

function FormRegisterContainer(){
    const axios = require('axios').default;
    const router = useRouter();
    const [usernameMessage, setUsernameMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [usernameColor, setUsernameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [usernameAvailable, setUsernameAvailable] = useState(false)
    const [emailAvailable, setEmailAvailable] = useState(false)
    const [messageChanged, setMessageChanged] = useState(true)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const usernameError = useRef(null);
    const emailError = useRef(null);
    const [data, setData] = useState({
        email: '',
        password: '',
        password2: '',
        username: '',
    });

    useEffect(()=>{
        usernameError.current.innerHTML = usernameMessage
        emailError.current.innerHTML = emailMessage
        if(usernameAvailable && emailAvailable){
            setButtonDisabled(false)
        }
        setMessageChanged(true)
    }, [messageChanged])

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const checkUsername = (username) =>{
        axios.get(`${process.env.BACKEND_URL}/accounts/account_available/` + username)
        .then(res =>{
            console.log(res.data['message'])
            setUsernameMessage(res.data['message'])
            setUsernameAvailable(true)
            setMessageChanged(false)
            setUsernameColor('green')
        })
        .catch(err => {
            setUsernameMessage(err.response.data['message'])
            console.log(err.response.data['message'])
            setMessageChanged(false)
            setUsernameColor('red')
        })
    }

    const checkEmail = (email) =>{
        axios.get(`${process.env.BACKEND_URL}/accounts/email_available/` + email)
        .then(res =>{
            console.log(res.data['message'])
            setEmailAvailable(true)
            setEmailMessage(res.data['message'])
            setMessageChanged(false)
            setEmailColor('green')
        })
        .catch(err => {
            setEmailAvailable(false)
            setEmailMessage(err.response.data['message'])
            console.log(err.response.data['message'])
            setMessageChanged(false)
            setEmailColor('red')
        })
    }

    const sendData = (event) => {        
        event.preventDefault()
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
        .then(function (res) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            router.reload()
        })
        .catch(function (error) {
            console.log(error.response.status);
            emailError.current.innerHTML = error.response.data.email
            usernameError.current.innerHTML = error.response.data.username;
        })
    }

    const onChangeValueHandler = (event) => {
        handleInputChange(event);
    }

    const usernameValueHandler = (event) => {
        handleInputChange(event)
        checkUsername(event.target.value)
    }

    const emailValueHandler = (event) => {
        handleInputChange(event)
        checkEmail(event.target.value)
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
                            onChangeValue={usernameValueHandler} 
                            value={data.username}
                            required={true}
                        />
                        <div ref={usernameError} className={styles.errorMsg} style={{color: `${usernameColor}`}}/>
                    </UserAccessIC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Correo Electrónico'/>
                        <InputGeneric 
                            type='email' 
                            name='email' 
                            onChangeValue={emailValueHandler} 
                            value={data.email}
                            required={true}
                        />
                        <div ref={emailError} className={styles.errorMsg} style={{color: `${emailColor}`}}/>
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
                        <ButtonBlue text='Registrarme' type='submit' style='add' disabled={buttonDisabled}/>
                    </div>
                </UserAccessSC>
            </form>
            );
    }
        
export default FormRegisterContainer;