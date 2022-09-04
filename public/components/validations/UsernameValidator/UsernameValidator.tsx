import { useEffect, useState } from "react"

const UsernameValidator = (username:string) => {
    const axios = require('axios').default;
    let url = `${process.env.BACKEND_URL}/accounts/account_available/` + username
    const [message, setMessage] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(url)
                    setMessage(response.data)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    },[url])
    return { message, error, loading }
}
export default UsernameValidator;