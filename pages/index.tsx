import { NextPage } from 'next';
import ProductRow from '../public/components/Containers/ProductRow/ProductRow';
import LabelBreaker from '../public/components/LabelBreaker/index';
import TempMessage from '../public/components/TempMessage/TempMessage';
import {useEffect, useState} from 'react';

const Home: NextPage = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [messageVisible, setMessageVisible] = useState<boolean>(false)

  const handleMessage = () =>{
    setShowMessage(true)
    setMessageVisible(true)
  }

  useEffect(() => {
    if(showMessage){
      const interval = setInterval(() => {
        setShowMessage(false)
      }, 4000);
      setMessageVisible(false)
    }
  }, [messageVisible])

  return (<>
    <div style={{
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems:'center',
      margin:'25px 20px',
    }}>
      <ProductRow cartClicked={handleMessage} title={'Destacados'} style='left' />
      <LabelBreaker style={'horizontalBreaker'} />
      <ProductRow cartClicked={handleMessage} title={'Recomendados'} style='left' />
      <LabelBreaker style={'horizontalBreaker'} />
      <ProductRow cartClicked={handleMessage} title={'Ofertas'} style='left' />
      <TempMessage enabled={showMessage} />
    </div>
    </>)
}
export default Home; 