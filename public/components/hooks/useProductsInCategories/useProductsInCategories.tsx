import { useEffect, useState } from "react";

export default function useProductsInCategories(pk: number){
  const axios = require('axios').default;
  const [productsInCategory, setProductsInCategory] = useState([])

  const sendData = (pk: number) =>{
    axios({
      method: 'GET',
      url: `${process.env.BACKEND_URL_API}store/categories/${pk}/`,
    }).then(res => {
      setProductsInCategory(res.data.products)
    }).catch( e => {
      console.log(e)
    })
  }

  useEffect(()=>{
    sendData(pk)
  }, [pk])
  
  return productsInCategory
}