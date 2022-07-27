import { NextPage } from 'next';
import HeaderTop from '../components/Containers/HeaderTop/index';
import NavBar from '../components/Containers/NavBar/NavBar';
import FooterFullContainer from '../components/Containers/FooterFullContainer/FooterFullContainer';

import LabelBreaker from '../components/LabelBreaker/index';
import UserAccessMC from '../components/Containers/UserAccessMC/UserAccessMC';
import PageTitle from '../components/Containers/PageTitle/PageTitle';

import FormLoginContainer from '../components/Containers/FormLoginContainer/FormLoginContainer';
import FormRegisterContainer from '../components/Containers/FormRegisterContainer/FormRegisterContainer';

const UserAccess: NextPage = () => {
    return (<>
        <HeaderTop />
        <NavBar />
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
                <PageTitle title={'Ingresar'} style='left' />
                <FormLoginContainer style=''/>
            </UserAccessMC>
            <div>
                <LabelBreaker style='vertical'/>
            </div>
            <UserAccessMC>
                <PageTitle title={'Registrarse'} style='left'/>
                <FormRegisterContainer style=''/>
            </UserAccessMC>
        </div>
        <FooterFullContainer />
    </>)
}
export default UserAccess; 