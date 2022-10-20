import styles from './CategoriesAssociate.styles';
import { useState, useRef, useCallback } from 'react';
import useCategories from '../hooks/useCategories/useCategories';
import useProduct from '../hooks/useProduct/useProduct';
import useProductsInCategories from '../hooks/useProductsInCategories/useProductsInCategories';
import ButtonArrow from '../buttons/ButtonArrow/ButtonArrow';

function CategoriesAssociate(props:{
}){
  const [pageNumber, setPageNumber] = useState<number>(1)
  const { hasMore, loading, error, products } = useProduct(pageNumber)
  const [currentCategory, setCurrentCategory] = useState<number>()
  const [selectedProd, setSelectedProd] = useState<object>()
  const {categories} = useCategories()
  const category = useProductsInCategories(currentCategory)
  const axios = require('axios').default;

  const observer = useRef(null)
  const lastProductRef = useCallback(node => {
  if (observer.current) observer.current.disconnect()
  observer.current = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting && hasMore){
      setPageNumber(prevPageNumber => prevPageNumber + 1)
    }
  })
  if(node) observer.current.observe(node)
  }, [hasMore, loading])


let categorySelector = useRef(null)

const sendData = (action: string) =>{
  axios.put(`${process.env.BACKEND_URL_API}store/categories/${currentCategory}/`,
    {
      product: selectedProd['value'],
      action: action
    },
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token  ${localStorage.getItem('token')}`
      },   
    }).then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  } 

const handleSelectCategory = (e) =>{ 
  let extraChilds = document.querySelectorAll('.extra-child')
  for(let i = 0; i < extraChilds.length; i++){
    categorySelector.current.removeChild(extraChilds[i])
  }
  setCurrentCategory(e.target.value)
}

const handleAddRemoveProduct = (action: string) =>{
  if(action === 'add' && categorySelector.current
  .querySelector('[value="' + selectedProd['value']+ '"]') === null){
    let opt = document.createElement('option');
    opt.value = String(selectedProd['value']);
    opt.innerHTML = String(selectedProd['text']);
    categorySelector.current.appendChild(opt)
    categorySelector.current.lastChild.classList.add('extra-child')
  }else if(action === 'remove'){
    categorySelector.current.querySelector('[value="' + selectedProd['value']+ '"]').hidden = true
  }else{
    return
  }
  sendData(action)
}

const handleProdSelected = (e) =>{
  setSelectedProd({value: e.target.value, text: e.target.innerHTML} )
}

return (<div className={styles.container}>
  <select onChange={handleSelectCategory}>
  {categories?.map((category, index)=>{
  return(<option key={index} value={category.id}>{category.name}</option>)
  })}
  </select>

  <div className={styles.row}>
    <select className={styles.select} multiple onClick={handleProdSelected}>
      {products?.map((product, index)=>{
        if(index + 1 === products.length){
          return(<option ref={lastProductRef} key={index} value={product.pk}>{product.name}</option>)
        }else{
          return(<option key={index} value={product.pk}>{product.name}</option>)
        }
      })}
    </select>

    <div className={styles.arrowContainer}>
    <ButtonArrow 
        text={'+'}
        style='buttonArrow'
        onClick={() => handleAddRemoveProduct('add')}
    />
    <ButtonArrow 
        text={'-'}
        style='buttonArrow'
        onClick={() => handleAddRemoveProduct('remove')}
    />
    </div>

    <select ref={categorySelector} className={styles.select} multiple onClick={handleProdSelected}>
    {category?.map((product, index)=>{
      return(<option key={index} value={product.pk}>{product.name}</option>)
    })}
    </select>
  </div>
</div>);
}

export default CategoriesAssociate;