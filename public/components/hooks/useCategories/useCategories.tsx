import { useEffect, useState } from "react";

export default function useCategories(){
  const axios = require('axios').default;
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [categories, setCategories] = useState([])

  const sendData = () =>{
    axios({
      method: 'GET',
      url: `${process.env.BACKEND_URL_API}store/categories/`,
    }).then(res => {
      setCategories(prevCategories => {
        return [new Set(...prevCategories), ...res.data.map(category => category)]
      })
      setLoading(false)
    }).catch( e => {
      console.log(e)
      setError(true)
    })
  }

  useEffect(() => {
    sendData()
  }, [])

  return {loading, error, categories}
}