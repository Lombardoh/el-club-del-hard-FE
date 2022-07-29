import { NextPage } from 'next';
import HeaderTop from '../components/Containers/HeaderTop/index';
import NavBar from '../components/Containers/NavBar/NavBar';
import FooterFullContainer from '../components/Containers/FooterFullContainer/FooterFullContainer';
import DivP10_F_Center from '../components/Containers/GenericContainers/DivP10_F_Center/DivP10_F_Center';
import PageTitle from '../components/Containers/PageTitle/PageTitle';



const WishlistPage: NextPage = () => {
    return (<>
        <HeaderTop />
        <NavBar />

        <DivP10_F_Center style='column'>
            <PageTitle title='Checkout' style='center' />
            <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center', padding:'0px 50px 100px',gap:'50px'}}>
                <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    <p>Form para identidad</p>
                    <p>Form para Direccion</p>
                    <p>Form de pago</p>
                </div>
                <div>
                    <p>Contenedor del carrito</p>
                    <p>Contenedor de precio/finalizar</p>
                </div>
            </div>
            
        </DivP10_F_Center>
        <FooterFullContainer />
    </>)
}
export default WishlistPage; 