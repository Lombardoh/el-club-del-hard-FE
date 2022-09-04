import { NextPage } from 'next';
import { useRef, useState, useEffect } from 'react';

import UserPageMC from '../public/components/Containers/UserPageMC/UserPageMC';
import UserPageSC from '../public/components/Containers/UserPageSC/UserPageSC';
import UserPageOCD from '../public/components/Containers/UserPageOCD/UserPageOCD';
import UserPageOCM from '../public/components/Containers/UserPageOCM/index';

import DivP0_F_Center from '../public/components/Containers/GenericContainers/DivP0_F_Center/DivP0_F_Center';

import L_Text20P_B from '../public/components/Texts/Left/20P_Bold/L_Text20P_B';

import ButtonUserPageBrowsing from '../public/components/ButtonUserPageBrowsing/ButtonUserPageBrowsing';
import Div_UserOrder from '../public/components/Containers/GenericContainers/Div_UserOrder/Div_UserOrder';

const UserPageOrders: NextPage = () => {
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
      
        <DivP0_F_Center style='column'>
            <div style={{display:'flex',flexDirection:'row'}}>
                <ButtonUserPageBrowsing href='/UserPageInfo' text='User Info' style='left' onClick={Function} />
                <ButtonUserPageBrowsing href='/UserPageOrders' text='Mis Compras' style='right' onClick={Function} />
            </div>
        </DivP0_F_Center>

        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            {windowWidth<770  ?
                <div style={{display:'flex',flexDirection:'column',width:'65%',gap:'10px'}}>
                    <UserPageOCM style='column'
                        order='0000000001'
                        date='01/06/2022'
                        price='$ 999999'
                        state='Confirmada'
                        detail='En Envío'
                        delivery='Andreanni'
                        tracking='SD67088274'
                    />
                    <UserPageOCM style='column'
                        order='0000000002'
                        date='01/06/2022'
                        price='$ 999999'
                        state='Cancelada'
                        detail='Entregada'
                        delivery='Andreanni'
                        tracking='SD67088274'
                    />
                    <UserPageOCM style='column'
                        order='0000000003'
                        date='01/06/2022'
                        price='$ 999999'
                        state='Confirmada'
                        detail='Entregada'
                        delivery='Andreanni'
                        tracking='SD67088274'
                    />
                    <UserPageOCM style='column'
                        order='0000000004'
                        date='01/06/2022'
                        price='$ 999999'
                        state='Confirmada'
                        detail='En Sucursal'
                        delivery='Andreanni'
                        tracking='SD67088274'
                    />
                </div> :

                <UserPageSC style='column'>
                    <div style={{display:'flex',justifyContent:'center',width:'100%',padding:'20px 0px'}}>
                        <Div_UserOrder style='column'><L_Text20P_B text='N° de Compra'/></Div_UserOrder>
                        <Div_UserOrder style='column'><L_Text20P_B text='Fecha'/></Div_UserOrder>
                        <Div_UserOrder style='column'><L_Text20P_B text='Total'/></Div_UserOrder>
                        <Div_UserOrder style='column'><L_Text20P_B text='Estado'/></Div_UserOrder>
                        <Div_UserOrder style='column'><L_Text20P_B text='Detalle'/></Div_UserOrder>
                        <Div_UserOrder style='column'><L_Text20P_B text='Correo'/></Div_UserOrder>
                        <Div_UserOrder style='column'><L_Text20P_B text='Seguimiento'/></Div_UserOrder>
                    </div>
        
                    <UserPageOCD style='row'
                        order='0000000000001'
                        date='01/06/2022'
                        price='$ 999999'
                        state='Confirmada'
                        detail='En Envío'
                        delivery='Andreanni'
                        tracking='SD67088274'
                    />
                    <UserPageOCD style='row'
                        order='0000000000002'
                        date='01/06/2022'
                        price='$ 999999'
                        state='Cancelada'
                        detail='Entregada'
                        delivery='Andreanni'
                        tracking='SD67088274'
                    />
                    <UserPageOCD style='row'
                        order='0000000000003'
                        date='01/06/2022'
                        price='$ 999999'
                        state='Confirmada'
                        detail='Entregada'
                        delivery='Andreanni'
                        tracking='SD67088274'
                    />
                    <UserPageOCD style='row'
                        order='0000000000004'
                        date='01/06/2022'
                        price='$ 999999'
                        state='Confirmada'
                        detail='En Sucursal'
                        delivery='Andreanni'
                        tracking='SD67088274'
                    />
                </UserPageSC> 
            }
        </div>
        
    </UserPageMC>
    </>)
}
export default UserPageOrders;