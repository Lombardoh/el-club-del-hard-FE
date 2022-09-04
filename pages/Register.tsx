import { NextPage } from 'next';
import UserAccessMC from '../public/components/Containers/UserAccessMC/UserAccessMC';
import PageTitle from '../public/components/Containers/PageTitle/PageTitle';
import FormRegisterContainer from '../public/components/Containers/FormRegisterContainer/FormRegisterContainer';

const Register: NextPage = () => {
    return (<>
        <div style={{
            display:'flex', 
            flexDirection:'row', 
            justifyContent:'center', 
            alignItems:'flex-start',
            padding:'0px',
            paddingBottom:'90px',
            gap: '10px'
        }}>
            <UserAccessMC>
                <PageTitle title={'Registrarse'} style='center'/>
                <FormRegisterContainer/>
            </UserAccessMC>
        </div>
    </>)
}
export default Register; 