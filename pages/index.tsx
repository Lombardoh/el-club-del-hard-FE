import { NextPage } from 'next';
import ProductRow from '../public/components/Containers/ProductRow/ProductRow';
import LabelBreaker from '../public/components/separators/LabelBreaker/index';
import TempMessage from '../public/components/TempMessage/TempMessage';
import {useEffect, useState} from 'react';
import useCategories from '../public/components/hooks/useCategories/useCategories';

const Home: NextPage = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [messageVisible, setMessageVisible] = useState<boolean>(false)
  const {categories} = useCategories(true)
  console.log(categories)
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
      {categories?.map((category, index)=>{
        if (index === 0) return
        return <>
          <ProductRow key={index} cartClicked={handleMessage} category_pk={category.id} title={category.name} style='left' />  
          <LabelBreaker style={'horizontalBreaker'} />
        </>
      })}
      <TempMessage enabled={showMessage} />
    </div>
    </>)
}
export default Home; 