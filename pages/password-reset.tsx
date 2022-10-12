import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ResetPass from '../public/components/Containers/ResetPass/ResetPass';

const PasswordReset: NextPage = () => {
  const [token, setToken] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    if(router.query.token){
      setToken(String(router.query.token))
    } 
  });
  
  return (<ResetPass token={token} />)
}
export default PasswordReset; 