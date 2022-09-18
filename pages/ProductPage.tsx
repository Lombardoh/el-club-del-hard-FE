import { NextPage } from 'next';
import LabelBreaker from '../public/components/LabelBreaker/index';
import ProductDetailedCard from '../public/components/Containers/ProductDetailedCard/ProductDetailedCard';
import ProductRow from '../public/components/Containers/ProductRow/ProductRow';
import DivP10_F_Center from '../public/components/Containers/GenericContainers/DivP10_F_Center/DivP10_F_Center';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductPage: NextPage = () => {
    const [data, setData] = useState([])
    const [dataFetched, setDataFetched] = useState(false)
    const router = useRouter();
    const [showMessage, setShowMessage] = useState<boolean>(false)
    const [messageVisible, setMessageVisible] = useState<boolean>(false)
    let product_pk = router.query.product_pk;

    const getData = () => {        
        fetch(`${process.env.BACKEND_URL}/api/store/products/${product_pk}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
        .then(data => {
            setData(data)
            setDataFetched(true)
            console.log(data)
        })
        .catch(err => console.log(err))
    }   

    useEffect(() => {
        getData()
    }, [dataFetched]);


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
                productName={data['name']}
                imageAlt={data['alt']}
                description={data['description']}
                price={data['price']}
                imageURL={data['image']}
                labelPromo={data['label']} 
                labelPromoStyle={'onSale'}
                labelPromo2nd={'Más Vendidos'} 
                labelPromo2ndStyle={'mostSold'} 
                labelPromoDisabled={false}
                labelStock={'En Stock'}
                labelStockStyle={'onStock'}
            /> : <div>Loading...</div>}
            <LabelBreaker style={'horizontalBreaker'} />
            <ProductRow cartClicked={handleMessage} title={'Productos Similares'} style='center'/>
        </DivP10_F_Center>
    </>)
}
export default ProductPage; 