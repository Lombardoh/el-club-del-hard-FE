import { useEffect, useState } from "react";

export default function useProduct(pageNumber){
    const axios = require('axios').default;
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [products, setProducts] = useState([])
    const [hasMore, setHasmore] = useState<boolean>(false)

    useEffect(() => {
        axios({
            method: 'GET',
            url: `${process.env.BACKEND_URL_API}store/products/`,
            params: {page: pageNumber}
        }).then(res => {
            setProducts(prevProducts => {
                return [...prevProducts, ...res.data.results.map(product =>
                    { return {...product}}
                    )]
            })
            setHasmore(res.data.next !== null)
            setLoading(false)
        }).catch( e => {
            console.log(e)
            setError(true)
        })
    }, [pageNumber])

    return {loading, error, products, hasMore}
}