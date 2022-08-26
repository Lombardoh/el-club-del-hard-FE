import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import User from '../components/interfaces/interfaces'
import UserPageMC from '../components/Containers/UserPageMC/UserPageMC';
import UserPageSC from '../components/Containers/UserPageSC/UserPageSC';
import UserAccessIC from '../components/Containers/UserAccessIC/UserAccessIC';
import DivP0_F_Center from '../components/Containers/GenericContainers/DivP0_F_Center/DivP0_F_Center';
import DivP0_F_Center_nh from '../components/Containers/GenericContainers/DivP0_F_Center_nh/DivP0_F_Center_nh';
import InputGeneric from '../components/InputGeneric/InputGeneric';
import ButtonPasswordEye from '../components/ButtonPasswordEye/ButtonPasswordEye';
import L_Text20P from '../components/Texts/Left/20P/L_Text20P';
import LabelBreakerUserData from '../components/LabelBreakerUserData/LabelBreakerUserData';
import ButtonBlue from '../components/ButtonBlue/ButtonBlue';
import ButtonUserPageBrowsing from '../components/ButtonUserPageBrowsing/ButtonUserPageBrowsing';

const UserPageInfo: NextPage = () => {
  const [data, setData] = useState<User>()
  const [dataFetched, setDataFetched] = useState(false)
  const axios = require('axios').default;
  const [windowWidth, setWindowWidth] = useState(0);

  const getData = () => {    
    axios.get(`${process.env.BACKEND_URL}/api/accounts/accounts/`,
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token  ${localStorage.getItem('token')}`
        },   
    }).then(res => {
        setDataFetched(true)
        setData(res.data)
    })
    .catch(err => console.log(err))
  } 
  
  useEffect(() => {
    getData();
  }, [dataFetched]);

  const sendData = () => {
    axios.put(`${process.env.BACKEND_URL}/api/accounts/accounts/`,
    {
      data
    },
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token  ${localStorage.getItem('token')}`
        },  
    }).then(res =>console.log(res.data['message']))
  } 
  
  useEffect(() => {
      setWindowWidth(window.innerWidth);
      if(windowWidth){
          window.addEventListener('resize', () => {
              setWindowWidth(window.innerWidth);
          });
      }
  }, [windowWidth]);

  const onChangeValueHandler = (event) => {
    handleInputChange(event)
  }

  const handleInputChange = (event) => {
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
  }

  const handleClick = () => {
    sendData();
  }

  return (<>
  {dataFetched ?
    <UserPageMC>      
      <DivP0_F_Center style='column'>
        <div style={{display:'flex',flexDirection:'row'}}>
            <ButtonUserPageBrowsing href='/UserPageInfo' text='User Info' style='left' onClick={Function} />
            <ButtonUserPageBrowsing href='/UserPageOrders' text='Mis Compras' style='right' onClick={Function} />
        </div>
      </DivP0_F_Center>
      <UserPageSC style='row'>
        <DivP0_F_Center_nh style='smaller'>
          <UserAccessIC style='container'>
            <L_Text20P text='Nombre de Usuario'/>
            <InputGeneric 
              type='text' 
              name='username' 
              onChangeValue={onChangeValueHandler} 
              value={data['username']}
              required={true}
            />
          </UserAccessIC>
          <UserAccessIC style='container'>
            <L_Text20P text='Correo Electrónico'/>
            <InputGeneric 
              type='email' 
              name='email' 
              onChangeValue={onChangeValueHandler} 
              value={data['email']}
              required={true}
            />
            </UserAccessIC>
            <UserAccessIC style='container'>
              <L_Text20P text='Nombre y Apellido'/>
              <InputGeneric 
                type='text' 
                name='first_name' 
                onChangeValue={onChangeValueHandler} 
                value={data['first_name']}
                required={true}
              />
            </UserAccessIC>
            <UserAccessIC style='container'>
              <L_Text20P text='Nombre y Apellido'/>
              <InputGeneric 
                type='text' 
                name='last_name' 
                onChangeValue={onChangeValueHandler} 
                value={data['last_name']}
                required={true}
              />
            </UserAccessIC>
        </DivP0_F_Center_nh>
        
        {windowWidth<1300 ? 
          <LabelBreakerUserData style={'horizontalBreaker'} /> :
          <LabelBreakerUserData style={'verticalBreaker'} />
        }
        <DivP0_F_Center_nh style='column'>
          <UserAccessIC style='forMobile'>
              <UserAccessIC style='container'>
                <L_Text20P text='Provincia'/>
                    <div style={{width:'100%',marginTop:'0px'}}>
                    <InputGeneric 
                      type='text' 
                      name='province' 
                      onChangeValue={onChangeValueHandler} 
                      value={data['province']}
                      required={true}
                    />
                    
                  </div>
              </UserAccessIC>
              <UserAccessIC style='container'>
                <L_Text20P text='Dirección'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='text' 
                    name='street' 
                    onChangeValue={onChangeValueHandler} 
                    value={data['street']}
                    required={true}
                  />
                </div>
              </UserAccessIC>
            </UserAccessIC>

            <UserAccessIC style='forMobile'>
              <UserAccessIC style='container'>
                <L_Text20P text='Ciudad'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='text' 
                    name='city' 
                    onChangeValue={onChangeValueHandler} 
                    value={data['city']}
                    required={true}
                  />
                </div>
              </UserAccessIC>
              <UserAccessIC style='container'>
                <L_Text20P text='Número de telefono'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='number' 
                    name='phone_number' 
                    onChangeValue={onChangeValueHandler} 
                    value={data['phone_number']}
                    required={true}
                  />
                </div>
              </UserAccessIC>
            </UserAccessIC>
            
            <UserAccessIC style='forMobile'>
              <UserAccessIC style='container'>
                <L_Text20P text='Barrio / Localidad'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='text' 
                    name='neighborhood' 
                    onChangeValue={onChangeValueHandler} 
                    value={data['neighborhood']}
                    required={true}
                  />
                </div>
              </UserAccessIC>
              <UserAccessIC style='container'>
                <L_Text20P text='Codigo Postal'/>
                <div style={{width:'100%',marginTop:'0px'}}>
                  <InputGeneric 
                    type='number' 
                    name='postal_code' 
                    onChangeValue={onChangeValueHandler} 
                    value={data['postal_code']}
                    required={true}
                  />
                </div>
              </UserAccessIC>
            </UserAccessIC>
        </DivP0_F_Center_nh>

        {windowWidth<1300 ? 
          <LabelBreakerUserData style={'horizontalBreaker'} /> :
          <LabelBreakerUserData style={'verticalBreaker'} />
        }
        <DivP0_F_Center_nh style='smaller'>
          <UserAccessIC style='container'>
            <L_Text20P text='Contraseña Actual'/>
            <div style={{display:'flex',alignItems:'center',width:'100%',padding:'0px',margin:'-5px 0px',marginBottom:'-5px'}}>
              <InputGeneric 
                type='password' 
                name='password' 
                onChangeValue={onChangeValueHandler}
                value={data['password']}
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
                  onChangeValue={onChangeValueHandler} 
                  value={''}
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
                  onChangeValue={onChangeValueHandler} 
                  value={''}
                  required={true}
                />
                <ButtonPasswordEye />
              </div>
          </UserAccessIC>
        </DivP0_F_Center_nh>
      </UserPageSC>

      <div style={{marginRight:'40px'}}>
        <ButtonBlue onClick={handleClick} text='Guardar' style={'add'} type='button'/>
      </div>
    </UserPageMC>
    : 'Loading'}</>)
}
export default UserPageInfo;