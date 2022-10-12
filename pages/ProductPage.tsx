import { NextPage } from 'next';
import LabelBreaker from '../public/components/LabelBreaker/index';
import ProductDetailedCard from '../public/components/Containers/ProductDetailedCard/ProductDetailedCard';
import ProductRow from '../public/components/Containers/ProductRow/ProductRow';
import DivP10_F_Center from '../public/components/Containers/GenericContainers/DivP10_F_Center/DivP10_F_Center';
import TempMessage from '../public/components/TempMessage/TempMessage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductPage: NextPage = () => {
  const [productData, setProductData] = useState([])
  const [dataFetched, setDataFetched] = useState(false)
  const [productPk, setProductPk] = useState<number>()
  const router = useRouter();
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [messageVisible, setMessageVisible] = useState<boolean>(false)

  useEffect(() => {
    if(router.query.product_pk && dataFetched == false || Number(router.query.product_pk) != productPk){
      setProductPk(Number(router.query.product_pk))
      getData(router.query.product_pk)
    } 
  });

  const getData = (product_pk) => {
    fetch(`${process.env.BACKEND_URL_API}store/products/${product_pk}`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
      })
      .then(res => res.json())
      .then(data => {
          setProductData(data)
          setDataFetched(true)
      })
      .catch(err => console.log(err))
  }

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
        <DivP10_F_Center style='column'>
            {dataFetched ? 
            <ProductDetailedCard
                product_pk = {productData['pk']}
                productName={productData['name']}
                imageAlt={productData['alt']}
                description={productData['description']}
                price={productData['price']}
                imageURL={productData['image'].replace(':8080','')}
                labelPromo={productData['label']} 
                labelPromoStyle={'onSale'}
                labelPromo2nd={'Más Vendidos'} 
                labelPromo2ndStyle={'mostSold'} 
                labelPromoDisabled={false}
                labelStock={'En Stock'}
                labelStockStyle={'onStock'}
                cartClicked={handleMessage}
            /> : <div>Cargando...</div>}
            <LabelBreaker style={'horizontalBreaker'} />
            <ProductRow cartClicked={handleMessage} pageNumber={1} title={'Productos Similares'} style='center'/>
        </DivP10_F_Center>
        <TempMessage enabled={showMessage} />
    </>)
}
export default ProductPage; 