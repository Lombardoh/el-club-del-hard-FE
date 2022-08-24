import { NextPage } from 'next';
import { useRef, useState, useEffect } from 'react';

import UserPageMC from '../components/Containers/UserPageMC/UserPageMC';
import UserPageSC from '../components/Containers/UserPageSC/UserPageSC';
import UserAccessIC from '../components/Containers/UserAccessIC/UserAccessIC';

import DivP0_F_Center_nh from '../components/Containers/GenericContainers/DivP0_F_Center_nh/DivP0_F_Center_nh';
import InputGeneric from '../components/InputGeneric/InputGeneric';

import ButtonPasswordEye from '../components/ButtonPasswordEye/ButtonPasswordEye';
import L_Text20P from '../components/Texts/Left/20P/L_Text20P';

import LabelBreakerUserData from '../components/LabelBreakerUserData/LabelBreakerUserData';
import ButtonBlue from '../components/ButtonBlue/ButtonBlue';

const Playground: NextPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if(windowWidth){
            window.addEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
            });
        }
    }, [windowWidth]);

  return (<>

    <UserPageMC>
      {/* navigation buttons (user info / compras) */}
      
      <UserPageSC>
        {/* info */}
        <DivP0_F_Center_nh style='smaller'>
          <UserAccessIC style='container'>
            <L_Text20P text='Nombre de Usuario'/>
            <InputGeneric 
              type='text' 
              name='username' 
              // onChangeValue={onChangeValueHandler} 
              // value={data.username}
              required={true}
            />
            {/* <div ref={usernameError} className={styles.errorMsg} /> */}
          </UserAccessIC>

          <UserAccessIC style='container'>
            <L_Text20P text='Correo Electrónico'/>
            <InputGeneric 
              type='email' 
              name='email' 
              // onChangeValue={onChangeValueHandler} 
              // value={data.email}
              required={true}
            />
            {/* <div ref={emailError} className={styles.errorMsg} /> */}
            </UserAccessIC>

            <UserAccessIC style='container'>
              <L_Text20P text='Nombre y Apellido'/>
              <InputGeneric 
                type='email' 
                name='email' 
                // onChangeValue={onChangeValueHandler} 
                // value={data.email}
                required={true}
              />
              {/* <div ref={emailError} className={styles.errorMsg} /> */}
            </UserAccessIC>
        </DivP0_F_Center_nh>
        
        {windowWidth<1300 ? 
          <LabelBreakerUserData style={'horizontalBreaker'} /> :
          <LabelBreakerUserData style={'verticalBreaker'} />
        }
        
        {/* direccion */}
        <DivP0_F_Center_nh style='column'>
          <UserAccessIC style='forMobile'>
              <UserAccessIC style='container'>
                <L_Text20P text='Provincia'/>
                    <div style={{width:'100%',marginTop:'0px'}}>
                    <InputGeneric 
                      type='text' 
                      name='provincia' 
                      // onChangeValue={onChangeValueHandler} 
                      // value={data.provincia}
                      required={true}
                    />
                    {/* <div ref={emailError} className={styles.errorMsg} /> */}
                  </div>
              </UserAccessIC>
              <UserAccessIC style='container'>
                <L_Text20P text='Dirección'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='text' 
                    name='direccion' 
                    // onChangeValue={onChangeValueHandler} 
                    // value={data.direccion}
                    required={true}
                  />
                  {/* <div ref={emailError} className={styles.errorMsg} /> */}
                </div>
              </UserAccessIC>
            </UserAccessIC>

            <UserAccessIC style='forMobile'>
              <UserAccessIC style='container'>
                <L_Text20P text='Ciudad'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='text' 
                    name='ciudad' 
                    // onChangeValue={onChangeValueHandler} 
                    // value={data.ciudad}
                    required={true}
                  />
                  {/* <div ref={emailError} className={styles.errorMsg} /> */}
                </div>
              </UserAccessIC>
              <UserAccessIC style='container'>
                <L_Text20P text='Número'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='text' 
                    name='numero' 
                    // onChangeValue={onChangeValueHandler} 
                    // value={data.numero}
                    required={true}
                  />
                  {/* <div ref={emailError} className={styles.errorMsg} /> */}
                </div>
              </UserAccessIC>
            </UserAccessIC>
            <UserAccessIC style='forMobile'>
              <UserAccessIC style='container'>
                <L_Text20P text='Barrio / Localidad'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='text' 
                    name='barrio' 
                    // onChangeValue={onChangeValueHandler} 
                    // value={data.barrio}
                    required={true}
                  />
                  {/* <div ref={emailError} className={styles.errorMsg} /> */}
                </div>
              </UserAccessIC>
              <UserAccessIC style='container'>
                <L_Text20P text='Codigo Postal'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='text' 
                    name='postal' 
                    // onChangeValue={onChangeValueHandler} 
                    // value={data.postal}
                    required={true}
                  />
                  {/* <div ref={emailError} className={styles.errorMsg} /> */}
                </div>
              </UserAccessIC>
            </UserAccessIC>
        </DivP0_F_Center_nh>

        {windowWidth<1300 ? 
          <LabelBreakerUserData style={'horizontalBreaker'} /> :
          <LabelBreakerUserData style={'verticalBreaker'} />
        }

        {/* contraseña */}
        <DivP0_F_Center_nh style='smaller'>
          <UserAccessIC style='container'>
            <L_Text20P text='Contraseña Actual'/>
            <div style={{display:'flex',alignItems:'center',width:'100%',padding:'0px',margin:'-5px 0px',marginBottom:'-5px'}}>
              <InputGeneric 
                type='password' 
                name='password' 
                // onChangeValue={onChangeValueHandler}
                // value={data.password}
                required={true}
                />
              <ButtonPasswordEye />
            </div>
          </UserAccessIC>
          <UserAccessIC style='container'>
            <L_Text20P text='Nueva Contraseña'/>
              <div style={{display:'flex',alignItems:'center',width:'100%',padding:'0px',margin:'-10px 0px',marginBottom:'-14px'}}>
                <InputGeneric 
                  type='password' 
                  name='password2' 
                  // onChangeValue={onChangeValueHandler} 
                  // value={data.password2}
                  required={true}
                />
                <ButtonPasswordEye />
              </div>
          </UserAccessIC>
          <UserAccessIC style='container'>
            <L_Text20P text='Repita su Contraseña'/>
              <div style={{display:'flex',alignItems:'center',width:'100%',padding:'0px',margin:'-4px 0px',marginBottom:'-6px'}}>
                <InputGeneric 
                  type='password' 
                  name='password2' 
                  // onChangeValue={onChangeValueHandler} 
                  // value={data.password2}
                  required={true}
                />
                <ButtonPasswordEye />
              </div>
          </UserAccessIC>
        </DivP0_F_Center_nh>
      </UserPageSC>

      <div style={{marginRight:'40px'}}>
        <ButtonBlue text='Guardar' style={'add'} type='submit'/>
      </div>
    </UserPageMC>
    </>)
}
export default Playground;