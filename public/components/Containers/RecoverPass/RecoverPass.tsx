import styles from './RecoverPass.styles'
import ButtonBlue from '../../../../out/components/ButtonBlue/ButtonBlue';
import InputGeneric from '../../InputGeneric/InputGeneric';
import { useState } from 'react';

function RecoverPass(){
  const [email, setEmail] = useState<string>()
  const [emailSent, setEmailSent] = useState<boolean>(false)
  const axios = require('axios').default;

  const postData = (email) =>{
    axios.post(`${process.env.BACKEND_URL}accounts/password-reset-email/`,
      {
        email: email
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },   
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleOnClick = () => {
    console.log('button clicked')
    postData(email)
    setEmailSent(true)
  }

  return (<>
    {emailSent ? 
      <h1 className={styles.emailSent}>El correo fue enviado</h1> :
      <div className={styles.container}>
        <h1>RECUPERAR CONTRASEÑA</h1>
        <h3>Escribe el email asociado a tu cuenta para recuperar tu contraseña:</h3>
        <InputGeneric type='email' name='email' onChangeValue={handleOnChange}/>
        <ButtonBlue text={'Recuperar contraseña'} type='submit' style='add' onClick={handleOnClick} />
      </div>
    }
  </>);
}

export default RecoverPass;
