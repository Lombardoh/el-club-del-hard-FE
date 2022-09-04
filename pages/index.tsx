import { NextPage } from 'next';
import ProductRow from '../public/components/Containers/ProductRow/ProductRow';
import LabelBreaker from '../public/components/LabelBreaker/index';

const Home: NextPage = () => {
  return (<>
    <div style={{
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems:'center',
      margin:'25px 20px',
    }}>
      <ProductRow title={'Destacados'} style='left' />
      <LabelBreaker style={'horizontalBreaker'} />
      <ProductRow title={'Recomendados'} style='left' />
      <LabelBreaker style={'horizontalBreaker'} />
      <ProductRow title={'Ofertas'} style='left' />
    </div>
    </>)
}
export default Home; 