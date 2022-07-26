import styles from './FormRegisterContainer.styles';
import UserAccessIC from '../UserAccessIC/UserAccessIC';
import UserAccessSC from '../UserAccessSC/UserAccessSC';
import L_Text20P from '../../Texts/Left/20P/L_Text20P';
import InputLoginRegister from '../../InputGeneric/InputGeneric';
import ButtonPasswordEye from '../../ButtonPasswordEye/ButtonPasswordEye';
import ButtonBlue from '../../ButtonBlue/ButtonBlue';

function FormRegisterContainer(props: {
    style: string;
}){

    return (
            <div
                className = {styles.container}
            >
                <UserAccessSC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Nombre de Usuario'/>
                        <InputLoginRegister type='text' name='userRegister'/>
                    </UserAccessIC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Correo Electrónico'/>
                        <InputLoginRegister type='email' name='email'/>
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
                            <InputLoginRegister type='password' name='password'/>
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
                            <InputLoginRegister type='password' name='password'/>
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
                        <ButtonBlue text='Registrarme' alert='Redirection' style='add' onClick={Function} />
                    </div>
                </UserAccessSC>
            </div>
            );
    }
        
export default FormRegisterContainer;