import { NextPage } from 'next';
import ToolOption from '../public/components/ToolOption/ToolOption';
import ToolContainer from '../public/components/Containers/ToolContainer/index';

const Tools: NextPage = () => {
  return (<ToolContainer>
    <ToolOption title='Categorias' url='/categories' 
    description='Crear y manejar categorias. Asociar productos a las mismas. Cambiar las categorias principales'/>
    <ToolOption title='pendiente' url='/' />
    <ToolOption title='pendiente' url='/' />
    <ToolOption title='pendiente' url='/' />
  </ToolContainer>)
}
export default Tools; 