import { NextPage } from 'next';
import UserAccessMC from '../components/Containers/UserAccessMC/UserAccessMC';
import PageTitle from '../components/Containers/PageTitle/PageTitle';

import FormLoginContainer from '../components/Containers/FormLoginContainer/FormLoginContainer';

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