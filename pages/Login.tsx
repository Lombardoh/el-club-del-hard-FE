import { NextPage } from 'next';
import UserAccessMC from '../public/components/Containers/UserAccessMC/UserAccessMC';
import PageTitle from '../public/components/Containers/PageTitle/PageTitle';

import FormLoginContainer from '../public/components/Containers/FormLoginContainer/FormLoginContainer';

const Login: NextPage = () => {
  return (
    <UserAccessMC>
      <PageTitle title={'Ingresar'} style='center' />
      <FormLoginContainer style=''/>
    </UserAccessMC>
  )
}
export default Login; 