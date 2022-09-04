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

import ProductCategoryMC from '../public/components/Containers/ProductCategoryMC/ProductCategoryMC';

import { useEffect, useState } from 'react';
import ProductCard from '../public/components/Containers/ProductCard/ProductCard';

const ProductCategory: NextPage = () => {
    const [data, setData] = useState([])
    const getData = () => {        
        fetch(`${process.env.BACKEND_URL}/api/store/products/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
        .then(data => setData(data.results))
        .catch(err => console.log(err))
    }   
    useEffect(() => {
        if(data.length === 0){
            getData();
            return
        }
    });
    

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
                {/*
                <div style={{
                    display:'flex',
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignItems:'center',
                    gap:'10px',
                    padding:'10px 90px 10px 70px',
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
                */}

                <div style={{
                    display:'flex',
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignItems:'center',
                    gap:'10px',
                    padding:'0px 0px 100px 0px',
                }}>
                    {/*
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
                    */}

                    <ProductCategoryMC>
                        {data ? data.map((product, key) => {
                            return (<>
                                {product.image ? 
                                    <div key={`${key}`}>
                                        <ProductCard
                                            product_pk={product.pk}
                                            labelPromo={product.label} 
                                            labelPromoStyle={'onSale'} 
                                            labelPromoDisabled={product.label != '' ? false : true}
                                            labelStock={'En Stock'}
                                            labelStockStyle={'onStock'}
                                            imageURL={product.image}
                                            imageAlt={product.alt}
                                            productName={product.name}
                                            price={`$ ${product.price}`}
                                        />
                                    </div> : null}
                            </>)
                        }) : 'Loading...'}
                    </ProductCategoryMC>
                    
                    {/*
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
                    */}
                    
                </div>
            </DefaultMainContainer>
        </div>
    </>)
}
export default ProductCategory; 