import { NextPage } from 'next';
import NavBar from '../components/Containers/NavBar/NavBar';
import FooterFullContainer from '../components/Containers/FooterFullContainer/FooterFullContainer';
import ProductRow from '../components/Containers/ProductRow/ProductRow';
import BannerContainer from '../components/Containers/BannerContainer/index';
import { CarouselItem } from '../components/Containers/BannerContainer/BannerContainer';
import HeaderTop from '../components/Containers/HeaderTop/HeaderTop';
import LabelBreaker from '../components/LabelBreaker/index';

const Home: NextPage = () => {
  return (<>
    <HeaderTop />
    <NavBar />
    <BannerContainer >
      <CarouselItem
        src={"https://www.zotac.com/download/files/styles/org/public/news/images/vga_keyart_banner_1920-580_14.jpg?itok=8-xu3fMJ"}
      />
      <CarouselItem
        src={"https://www.zotac.com/download/files/styles/org/public/news/images/2018rtxgraphicscards_2060banner_1920x580.jpg?itok=1ubl0PUj"}
      />
    </BannerContainer>
    <div style={{
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems:'center',
      margin:'25px 20px',
    }}>
      <ProductRow title={'Productos 1'} style='left' />
      <LabelBreaker style={'horizontalBreaker'} />
      <ProductRow title={'Productos 2'} style='left' />
      <LabelBreaker style={'horizontalBreaker'} />
      <ProductRow title={'Productos 3'} style='left' />
    </div>
    <FooterFullContainer />
    </>)
}
export default Home; 