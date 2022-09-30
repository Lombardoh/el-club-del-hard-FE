import { NextPage } from 'next';
import PageTitle from '../public/components/Containers/PageTitle/PageTitle';
import DefaultMainContainer from '../public/components/Containers/DefaultMainContainer/DefaultMainContainer';
import ProductCategoryMC from '../public/components/Containers/ProductCategoryMC/ProductCategoryMC';
import { useEffect, useState, useRef, useCallback } from 'react';
import ProductCard from '../public/components/Containers/ProductCard/ProductCard';
import TempMessage from '../public/components/TempMessage/TempMessage';
import useProduct from '../public/components/useProduct/useProduct';

const ProductCategory: NextPage = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [messageVisible, setMessageVisible] = useState<boolean>(false)
  const [pageNumber, setPageNumber] = useState<number>(1)
  
  const { loading, hasMore, products, error } = useProduct(pageNumber)

  const observer = useRef(null)
  const lastProductRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore){
        setPageNumber(prevPageNumber => prevPageNumber + 1)
        console.log('visible')
      }
    })
    if(node) observer.current.observe(node)
  }, [loading, hasMore])

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
  
  return (
    <div>
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
              {products?.map((product, key) => {
               if(products.length === key + 1){
                return (<>
                  {product.image ? 
                    <div ref={lastProductRef} key={`${key}`}>
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
                        productName={'product.name'}
                        price={`$ ${product.price}`}
                      />
                    </div> : null}
                  </>)
               }else{
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
               }
              })}
            </ProductCategoryMC>                    
          </div>
        </DefaultMainContainer>
        <TempMessage enabled={showMessage} />
    </div>
  </div>)
}
export default ProductCategory; 