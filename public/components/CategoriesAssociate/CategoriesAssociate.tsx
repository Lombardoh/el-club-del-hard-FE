import styles from './CategoriesAssociate.styles';
import { useEffect, useState } from 'react';
import useCategories from '../useCategories/useCategories';
import useProduct from '../../../out/components/useProduct/useProduct';
import useCategory from '../useCategory/index';

function CategoriesAssociate(props:{
}){

const [currentCategory, setCurrentCategory] = useState<any>()
const {loading, error, categories} = useCategories()
const {products} = useProduct(1)
const category = useCategory(currentCategory)


const handleSelectCategory = (e) =>{
  setCurrentCategory(e.target.value)
}

return (<div className={styles.container}>
  <select onChange={handleSelectCategory}>
  {categories?.map((category, index)=>{
  return(<option key={index} value={category.id}>{category.name}</option>)
  })}
  </select>
  <div className={styles.row}>
    <select className={styles.select} multiple>
      {products?.map((product, index)=>{
        return(<option key={index} value={product.pk}>{product.name}</option>)
      })}
    </select>

    <select multiple>
    {category?.map((product, index)=>{
      return(<option key={index} value={product.pk}>{product.name}</option>)
    })}
    </select>
  </div>
</div>);
}

export default CategoriesAssociate;