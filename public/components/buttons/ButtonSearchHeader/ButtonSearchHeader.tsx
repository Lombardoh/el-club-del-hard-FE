import styles from './ButtonSearchHeader.styles';
import { BsSearch } from 'react-icons/bs';
import React, {useState, useRef, useEffect} from 'react';
import {IconContext} from 'react-icons';
import useSearch from '../../hooks/useSearch/useSearch';
import { useRouter } from '../../../../node_modules/next/router';

function ButtonSearchHeader(){
  const [open, setOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<string>()
  const [pageNumber, setPageNumber] = useState<Number>(1)
  const router = useRouter()

  const {
    products,
    hasMore,
    loading,
    error,
    empty
  } = useSearch(query, pageNumber)

  const handleOpen = () =>{
    setOpen(!open)
  }

  const handleSelect = (event) =>{
    router.push(`/ProductPage?product_pk=${event.target.value}`)
  }

  const handleSearch = (e) =>{
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <IconContext.Provider value={{size: '20px'}}>
      {open ? 
      <div className={styles.container}>
        <input type='text' value={query} onChange={handleSearch} className={styles.searchBar} />
        <div className={styles.searchContainer}>
          <div className={styles.searchDropBox}>
            {!empty ?
              <select onClick={handleSelect}>
                {products.map((product, index) => {
                  return <option value={product.pk} key={product.pk}>{product.name}</option>
                })}
              </select>
            : null
            }
          </div>
        </div>
      </div>
      : null}
      <BsSearch className={styles.searchIcon} onClick={handleOpen} />
    </IconContext.Provider>
  );
}

export default ButtonSearchHeader;