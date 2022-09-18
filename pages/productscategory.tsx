import { NextPage } from 'next';
import PageTitle from '../public/components/Containers/PageTitle/PageTitle';
import DefaultMainContainer from '../public/components/Containers/DefaultMainContainer/DefaultMainContainer';
import ProductCategoryMC from '../public/components/Containers/ProductCategoryMC/ProductCategoryMC';
import { useEffect, useState } from 'react';
import ProductCard from '../public/components/Containers/ProductCard/ProductCard';
import TempMessage from '../public/components/TempMessage/TempMessage';

const ProductCategory: NextPage = () => {
  const [data, setData] = useState([])
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [messageVisible, setMessageVisible] = useState<boolean>(false)

  const getData = () => {        
    fetch(`${process.env.BACKEND_URL_API}store/products/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
    .then(data => setData(data.results))
    .catch(err => console.log(err))
  }   
  useEffect(() => {
    if(data.length === 0){
      getData();
      return
    }
  });

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
          padding: '0px 10px'
      }}>
          <PageTitle title={'Product Category'} style='center' />
          <DefaultMainContainer>
              <div style={{
                  display:'flex',
                  flexDirection:'column', 
                  justifyContent:'center', 
                  alignItems:'center',
                  gap:'10px',
                  padding:'0px 0px 100px 0px',
              }}>
                  <ProductCategoryMC>
                      {data ? data.map((product, key) => {
                          return (<>
                              {product.image ? 
                                  <div key={`${key}`}>
                                      <ProductCard
                                          cartClicked={handleMessage}
                                          product_pk={product.pk}
                                          labelPromo={product.label} 
                                          labelPromoStyle={'onSale'} 
                                          labelPromoDisabled={product.label != '' ? false : true}
                                          labelStock={'En Stock'}
                                          labelStockStyle={'onStock'}
                                          imageURL={product.image.replace(':8080','')}
                                          imageAlt={product.alt}
                                          productName={product.name}
                                          price={`$ ${product.price}`}
                                      />
                                  </div> : null}
                          </>)
                      }) : 'Loading...'}
                  </ProductCategoryMC>                    
              </div>
          </DefaultMainContainer>
          <TempMessage enabled={showMessage} />
      </div>
  </>)
}
export default ProductCategory; 