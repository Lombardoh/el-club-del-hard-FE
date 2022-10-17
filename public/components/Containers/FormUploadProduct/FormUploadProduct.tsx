import styles from './FormUploadProduct.styles';
import UserAccessIC from '../UserAccessIC/UserAccessIC';
import UserAccessSC from '../UserAccessSC/UserAccessSC';

import DivP10_40_F_End from '../GenericContainers/DivP10_40_F_End/DivP10_40_F_End';
import DivP0_F_Center from '../GenericContainers/DivP0_F_Center/DivP0_F_Center';

import L_Text20P from '../../Texts/Left/20P/L_Text20P';
import InputGeneric from '../../InputGeneric/InputGeneric';
import ButtonBlue from '../../buttons/ButtonBlue/ButtonBlue';

import SelectorLabel from '../../SelectorLabel/SelectorLabel';

function FormUploadProduct(props: {}){
    const onChangeValueHandler = (event) => {
        console.log('changed')
    }
    return (
            <form
                className = {styles.container}
            >
                <UserAccessSC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Nombre del Producto'/>
                        <InputGeneric 
                            type='text' 
                            name='name' 
                            onChangeValue={onChangeValueHandler} 
                            value={'data.username'}
                            required={false}
                        />
                    </UserAccessIC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Descripción'/>
                        <InputGeneric 
                            type='textarea' 
                            name='description'
                            onChangeValue={onChangeValueHandler} 
                            value={'data.username'}
                            required={false}
                             />
                    </UserAccessIC>
                    <DivP0_F_Center style='row'>
                        <UserAccessIC style='container'>
                            <L_Text20P text='Precio'/>
                            <InputGeneric 
                                type='number' 
                                name='price' 
                                onChangeValue={onChangeValueHandler} 
                                value={'data.username'}
                                required={false}
                            />
                        </UserAccessIC>
                        <UserAccessIC style='container'>
                            <L_Text20P text='Stock'/>
                            <InputGeneric 
                                type='number' 
                                name='quantity' 
                                onChangeValue={onChangeValueHandler} 
                                value={'data.username'}
                                required={false}
                            />
                        </UserAccessIC>
                    </DivP0_F_Center>
                    <DivP0_F_Center style='row'>
                        <UserAccessIC style='container'>
                            <L_Text20P text='Etiqueta'/>
                            <SelectorLabel name='label'/>
                        </UserAccessIC>
                        <UserAccessIC style='container'>
                            <L_Text20P text='Descuento'/>
                            <InputGeneric 
                                type='number' 
                                name='discount' 
                                onChangeValue={onChangeValueHandler} 
                                value={'data.username'}
                                required={false}
                            />
                        </UserAccessIC>
                    </DivP0_F_Center>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Imagen del Producto'/>
                        <InputGeneric 
                            type='file' 
                            name='image' 
                            onChangeValue={onChangeValueHandler} 
                            value={'data.username'}
                            required={false}
                        />
                    </UserAccessIC>
                    <UserAccessIC style='container'>
                        <L_Text20P text='Texto Alternativo a la Imagen'/>
                        <InputGeneric 
                            type='text' 
                            name='alt'
                            onChangeValue={onChangeValueHandler} 
                            value={'data.username'}
                            required={false} 
                        />
                    </UserAccessIC>
                    <DivP10_40_F_End style='column'>
                        <ButtonBlue type='button' text='Actualizar' alert='Producto Actualizado' style='add' onClick={Function} />
                    </DivP10_40_F_End>
                </UserAccessSC>
            </form>
            );
    }
        
export default FormUploadProduct;