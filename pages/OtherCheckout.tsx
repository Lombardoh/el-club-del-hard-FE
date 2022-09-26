import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import User from '../public/components/interfaces/interfaces'
import UserPageMC from '../public/components/Containers/UserPageMC/UserPageMC';
import UserPageSC from '../public/components/Containers/UserPageSC/UserPageSC';
import UserAccessIC from '../public/components/Containers/UserAccessIC/UserAccessIC';
import DivP0_F_Center_nh from '../public/components/Containers/GenericContainers/DivP0_F_Center_nh/DivP0_F_Center_nh';
import InputGeneric from '../public/components/InputGeneric/InputGeneric';
import SelectGeneric from '../public/components/SelectGeneric/SelectGeneric';
import L_Text20P from '../public/components/Texts/Left/20P/L_Text20P';
import LabelBreakerCheckout from '../public/components/LabelBreakerCheckout/LabelBreakerCheckout';
import ButtonBlue from '../public/components/ButtonBlue/ButtonBlue';
import L_Text20P_B from '../public/components/Texts/Left/20P_Bold/L_Text20P_B';
import { useRouter } from '../node_modules/next/router'


const OtherCheckout: NextPage = () => {
  const [data, setData] = useState<User>()
  const [dataFetched, setDataFetched] = useState(false)
  const [price, setPrice] = useState<number>(0)
  const [priceFetched, setPriceFetched] = useState<boolean>(false)
  const axios = require('axios').default;
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();

  const getUserData = () => {    
    axios.get(`${process.env.BACKEND_URL_API}accounts/accounts/`,
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
    getUserData();
  }, [dataFetched]);

  const getPriceData = () => {    
    axios.get(`${process.env.BACKEND_URL_API}cart/cart/`,
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token  ${localStorage.getItem('token')}`
        },   
    }).then(res => {
      setPrice(res.data[0]['cart_total'])
      setPriceFetched(true)
    })
    .catch(err => console.log(err))
  } 
  
  useEffect(() => {
    getPriceData();
  }, [priceFetched]);

  const sendOrderData = () => {      
      axios.post(`${process.env.BACKEND_URL_API}orders/order/`,
      {},
      {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Token  ${localStorage.getItem('token')}`
          },   
      })
      .then(res => {
          console.log(res)
          router.push('/successful_purchase')
      })
      .catch(err => console.log(err))
  }

  const sendAccountData = () => {
    axios.put(`${process.env.BACKEND_URL_API}accounts/accounts/`,
    {
      data
    },
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Token  ${localStorage.getItem('token')}`
        },  
    }).then(res =>{
      console.log(res.data['message'])
      sendOrderData();
    })
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
    sendAccountData();
  }

  return (<>
    {data ?
    <UserPageMC>      
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
            <L_Text20P text='Nombre'/>
            <InputGeneric 
              type='text' 
              name='first_name' 
              onChangeValue={onChangeValueHandler} 
              value={data['first_name']}
              required={true}
            />
          </UserAccessIC>
          <UserAccessIC style='container'>
            <L_Text20P text='Apellido'/>
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
        <LabelBreakerCheckout style={'horizontalBreaker'} /> :
        <LabelBreakerCheckout style={'verticalBreaker'} />
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
              <L_Text20P text='Telefono'/>
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
        <LabelBreakerCheckout style={'horizontalBreaker'} /> :
        <LabelBreakerCheckout style={'verticalBreaker'} />
      }

      <DivP0_F_Center_nh style='column'>
          <UserAccessIC style='container'>
              <L_Text20P text='Medio de pago'/>
              <div style={{width:'100%',marginTop:'0px'}}>
                <SelectGeneric>
                  <option value='transferencia'>Transferencia</option>
                </SelectGeneric>
              </div>
          </UserAccessIC>
      </DivP0_F_Center_nh>
    </UserPageSC>

    <div style={{marginRight:'40px',display:'flex',flexDirection:'column',gap:'50px',justifyContent:'center'}}>
      <div style={{display:'flex',gap:'20px'}}>
          <L_Text20P_B text='Precio Final:' />
          <div>{price}</div>
      </div>
      <ButtonBlue  text='Finalizar Compra' onClick={handleClick} style={'add'} type='button'/> 
    </div>
  </UserPageMC>
   : 'Loading'}
    </>)
}
export default OtherCheckout;