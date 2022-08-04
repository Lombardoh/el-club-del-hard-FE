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
import { useState } from 'react';

function FormLoginContainer(props: {
    style: string;
}){
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
            <div
                className = {styles.container}
            >
                <UserAccessSC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Nombre de Usuario'/>
                        <InputLoginRegister 
                            type='text' 
                            name='userLogin'
                            onChangeValue={onChangeValueHandler}
                            value={data.username}
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
                        marginRight:'210px',
                        gap:'30px'
                    }}>
                        <ButtonBlue text='Login' alert='Redirection' style='add' onClick={Function} />
                        <ClickableContainer alert='clicked' onClick={Function} style='row'>
                            <ButtonBoxCheck />
                            <Text16P text='Recuérdame' />
                        </ClickableContainer>
                    </div>
                    <ClickableContainer alert={'Redirection'} onClick={Function} style='current'>
                        <Text16P_B text='¿Olvidaste tu contraseña?' />
                    </ClickableContainer>
                </UserAccessSC>
            </div>
        );
    }

export default FormLoginContainer;