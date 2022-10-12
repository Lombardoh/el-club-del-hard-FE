import styles from './ResetPass.styles'
import ButtonBlue from '../../../../out/components/ButtonBlue/ButtonBlue';
import InputGeneric from '../../InputGeneric/InputGeneric';
import { useState } from 'react';
import { useRouter } from '../../../../node_modules/next/router';

function ResetPass(props: {
    token: string 
  }){
  const [password, setPassword] = useState<string>()
  const [password2, setPassword2] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [error, setError] = useState<string>()
  const router = useRouter()
  const axios = require('axios').default;
  

  const postData = (token: string, email: string, password: string) =>{
    axios.post(`${process.env.BACKEND_URL}accounts/password-reset-confirm/${token}`,
      {
        email: email,
        password: password
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },   
      })
      .then(function (res) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.username);
        router.push('/')
      })
      .catch(err => console.log(err)
    )
  }

  const handlePasswords = (e, name: string) => {
    name === 'password' ? setPassword(e.target.value) : setPassword2(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleOnClick = () => {
    if(password !== password2){
      setError('Las contraseñas no coinciden')
      return
    } 
    setError('')
    postData(props.token, email, password)
  }

  return (<>
      <div className={styles.container}>
        <h1>CAMBIAR CONTRASEÑA</h1>
        <h3>Escribe tu direccion de correo:</h3>
        <InputGeneric type='email' name='email' onChangeValue={handleEmail}/>
        <h3>Escribe tu nueva contraseña:</h3>
        <InputGeneric type='password' name='password' onChangeValue={(e) => handlePasswords(e, 'password')}/>
        <InputGeneric type='password' name='password2' onChangeValue={(e) => handlePasswords(e, 'password2')}/>
        {error}
        <ButtonBlue text={'Cambiar contraseña'} type='button' style='add' onClick={handleOnClick} />
      </div>
  </>);
}

export default ResetPass;
