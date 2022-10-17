import styles from './CategoriesCreate.styles';
import { useEffect, useState } from 'react';
import useCategories from '../hooks/useCategories/useCategories';

function CategoriesCreate(props:{
}){

const {loading, error, categories} = useCategories()

return (<div className={styles.container}>
{categories?.map((category, index)=>{
  return(<><div>{category.name}</div><div>{category.principal}</div></>)
})}
</div>);
}

export default CategoriesCreate;