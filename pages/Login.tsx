import { NextPage } from 'next';
import UserAccessMC from '../public/components/Containers/UserAccessMC/UserAccessMC';
import PageTitle from '../public/components/Containers/PageTitle/PageTitle';

import FormLoginContainer from '../public/components/Containers/FormLoginContainer/FormLoginContainer';

const Login: NextPage = () => {
    return (<>
        <div style={{
            display:'flex', 
            flexDirection:'row', 
            justifyContent:'center', 
            alignItems:'flex-start',
            padding:'0px',
            paddingBottom:'90px',
        }}>
            <UserAccessMC>
                <PageTitle title={'Ingresar'} style='center' />
                <FormLoginContainer style=''/>
            </UserAccessMC>
        </div>
    </>)
}
export default Login; 