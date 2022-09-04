import { NextPage } from 'next';

import PageTitle from '../public/components/Containers/PageTitle/PageTitle';
import DefaultMainContainer from '../public/components/Containers/DefaultMainContainer/DefaultMainContainer';
import PageNavigationContainer from '../public/components/Containers/PageNavigationContainer/PageNavigationContainer';
import ButtonPageNumber from '../public/components/ButtonPageNumber/ButtonPageNumber';
import ProductRowCategory from '../public/components/Containers/ProductRowCategory/ProductRowCategory';
import ProductFilterContainer from '../public/components/Containers/ProductFilterContainer/index';
import InsideFilterContainers from '../public/components/Containers/InsideFilterContainers/InsideFilterContainers';
import ButtonFilterSelector from '../public/components/ButtonFilterSelector/ButtonFilterSelector';
import BrandFilterContainer from '../public/components/Containers/BrandFilterContainer/BrandFilterContainer';
import Text20P from '../public/components/Texts/Center/20P/Text20P';
import Text32P from '../public/components/Texts/Center/32P/Text32P';


const ProductCategory: NextPage = () => {
    return (<>

        <div style={{
            display:'flex', 
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center',
            padding: '0px 10px'
        }}>
            <PageTitle title={'Product Category'} style='center' />
            <DefaultMainContainer>
                <div style={{
                    display:'flex',
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignItems:'center',
                    gap:'10px',
                    padding:'10px 90px 10px 10px',
                }}>
                    <ProductFilterContainer>
                        <InsideFilterContainers style='outer'>
                            <Text32P text='Precio' />
                            <InsideFilterContainers style='insider'>
                                <BrandFilterContainer alert='clicked' onClick={Function}>
                                    <ButtonFilterSelector style='selected' onClick={Function}/>
                                    <Text20P text='Mayor a Menor' />
                                </BrandFilterContainer>
                                <BrandFilterContainer alert='clicked' onClick={Function}>
                                    <ButtonFilterSelector style='notSelected' onClick={Function}/>
                                    <Text20P text='Menor a Mayor' />
                                </BrandFilterContainer>
                            </InsideFilterContainers>
                        </InsideFilterContainers>
                        <InsideFilterContainers style='outer'>
                            <Text32P text='Marcas' />
                            <InsideFilterContainers style='insider'>
                                 <BrandFilterContainer alert='clicked' onClick={Function}>
                                    <ButtonFilterSelector style='selected' onClick={Function}/>
                                    <Text20P text='Nvidia' />
                                </BrandFilterContainer>
                                <BrandFilterContainer alert='clicked' onClick={Function}>
                                    <ButtonFilterSelector style='notSelected' onClick={Function}/>
                                    <Text20P text='AMD' />
                                </BrandFilterContainer>
                                <BrandFilterContainer alert='clicked' onClick={Function}>
                                    <ButtonFilterSelector style='notSelected' onClick={Function}/>
                                    <Text20P text='Whatever' />
                                </BrandFilterContainer>
                                <BrandFilterContainer alert='clicked' onClick={Function}>
                                    <ButtonFilterSelector style='notSelected' onClick={Function}/>
                                    <Text20P text='Whatever' />
                                </BrandFilterContainer>
                            </InsideFilterContainers>
                        </InsideFilterContainers>
                    </ProductFilterContainer>
                </div>

                <div style={{
                    display:'flex',
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignItems:'center',
                    gap:'10px',
                    padding:'0px 0px 40px 0px',
                }}>
                    <PageNavigationContainer>
                        <ButtonPageNumber 
                            indexNumber={'1'}
                            style={'current'}
                            onClick={Function} />
                        <ButtonPageNumber 
                            indexNumber={'2'}
                            style={'other'}
                            onClick={Function} />
                        <ButtonPageNumber 
                            indexNumber={'3'}
                            style={'other'}
                            onClick={Function} />
                        <ButtonPageNumber 
                            indexNumber={'4'}
                            style={'final'}
                            onClick={Function} />
                    </PageNavigationContainer>

                    <ProductRowCategory />
                    <ProductRowCategory />
                    <ProductRowCategory />

                    <PageNavigationContainer>
                        <ButtonPageNumber 
                            indexNumber={'1'}
                            style={'current'}
                            onClick={Function} />
                        <ButtonPageNumber 
                            indexNumber={'2'}
                            style={'other'}
                            onClick={Function} />
                        <ButtonPageNumber 
                            indexNumber={'3'}
                            style={'other'}
                            onClick={Function} />
                        <ButtonPageNumber 
                            indexNumber={'4'}
                            style={'final'}
                            onClick={Function} />
                    </PageNavigationContainer>
                </div>
            </DefaultMainContainer>
        </div>
    </>)
}
export default ProductCategory; 