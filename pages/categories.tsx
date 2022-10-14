import { NextPage } from 'next';
import CategoriesAssociate from '../public/components/CategoriesAssociate/CategoriesAssociate';
import TextGeneric from '../public/components/Texts/TextGeneric/TextGeneric';

const Categories: NextPage = () => {
  return (<>
  <TextGeneric text='Modificar categorias' size={32}/>
  <CategoriesAssociate />
  </>)
}
export default Categories; 