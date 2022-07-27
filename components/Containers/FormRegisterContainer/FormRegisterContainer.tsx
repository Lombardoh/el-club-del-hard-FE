import styles from './FormRegisterContainer.styles';
import UserAccessIC from '../UserAccessIC/UserAccessIC';
import UserAccessSC from '../UserAccessSC/UserAccessSC';
import L_Text20P from '../../Texts/Left/20P/L_Text20P';
import InputLoginRegister from '../../InputGeneric/InputGeneric';
import InputGeneric from '../../InputGeneric/InputGeneric';
import ButtonPasswordEye from '../../ButtonPasswordEye/ButtonPasswordEye';
import ButtonBlue from '../../ButtonBlue/ButtonBlue';
import { useState } from 'react';

function FormRegisterContainer(){
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
        fetch(`${process.env.BACKEND_URL}/accounts/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
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