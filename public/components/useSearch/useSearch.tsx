import { useEffect, useState } from "react";

export default function useProduct(query, pageNumber){
    const axios = require('axios').default;
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [products, setProducts] = useState([])
    const [hasMore, setHasmore] = useState<boolean>(false)
    const [empty, setEmpty] = useState<boolean>(true)

    useEffect(() => {
        setEmpty(query ? false : true)
        setProducts([])
    }, [query])

    useEffect(() => {
        if(empty) return
        let cancel
        axios({
            method: 'GET',
            url: `${process.env.BACKEND_URL_API}store/products/`,
            params: {page: pageNumber, q: query},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setProducts(prevProducts => {
                return [...prevProducts, ...res.data.results.map(product => 
                    { return {...product}})]
            })
            setHasmore(res.data.next !== null)
            setLoading(false)
        }).catch( e => {
            console.log(e)
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [pageNumber, query])

    return {loading, error, products, hasMore, empty}
}