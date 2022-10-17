import styles from './ProductRow.styles';
import Text36P_L from '../../Texts/Left/36P_Bold/L_Text36P_B';
import ProductCard from '../ProductCard/ProductCard';
import ButtonArrow from '../../buttons/ButtonArrow/ButtonArrow';
import useProduct from '../../../../out/components/useProduct/useProduct';
import { useEffect, useState, useRef } from 'react';

function ProductRow(props: {
  title: string,
  style: string,
  cartClicked: any,
  pageNumber: number
}){
  let currentStyle = props.style
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [touchStartPos, setTouchStartPos] = useState<number>(0);
  const [touchEndPos, setTouchEndPos] = useState<number>(0);
  const [displacement, setDisplacement] = useState<number>(0)
  const [touched, setTouched] = useState<boolean>(false)
  const [swiped, setSwiped] = useState<boolean>(false)

  let cardWidth = 320;

  const { loading, hasMore, products, error } = useProduct(props.pageNumber)

  const handleClick = (action) => {
      setActiveIndex(eval(`${activeIndex} ${action} 1`))
      if (activeIndex > 4) setActiveIndex(0);
      if (activeIndex < 0) setActiveIndex(4);
  }

  const touchStartHandler = (e) => {
    if(!e.targetTouches[0]) return
    setTouchStartPos(e.targetTouches[0].clientX)
    setTouchEndPos(e.targetTouches[0].clientX)
    setTouched(true)
  }

  const touchMovesHandler = (e) => {
    if(!e.targetTouches[0]) return
    setTouchStartPos(e.targetTouches[0].clientX)
    setDisplacement((previous) => previous + (touchEndPos - touchStartPos)/10)
  }

  const touchEndHandler = (e) => {
    if(!e.targetTouches[0]) return
    setTouchStartPos(e.targetTouches[0].clientX)
    setTouchEndPos(e.targetTouches[0].clientX)
  }
  
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if(windowWidth){
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 1370) {
          cardWidth = 320
        } else if (window.innerWidth > 760) {
          cardWidth = 255
        } else if (window.innerWidth > 370) {
          cardWidth = 191
        } else {cardWidth = 155}
      });
    }
  }, [windowWidth]);

  return (
    <div className = {currentStyle === "left" ? styles.left: styles.center} >
      <Text36P_L text={props.title}/>
      <div className={styles.productRow}>
        <ButtonArrow 
          text={'◀'}
          style={'buttonArrow'}
          onClick={() => handleClick('-')}
        />
          <div className={styles.carousel}>
            {products?.map((product, key) => {
              return (<>
                {product.image ? 
                <div key={`${key}`} style={{transition: 'transform 0.3s',
                transform: `translateX(-${activeIndex*cardWidth+displacement}px)`,}}
                onTouchStart={(e) => touchStartHandler(e)}
                onTouchMove={(e) => touchMovesHandler(e)}
                onTouchEnd={(e) => touchEndHandler(e)}>
                  <ProductCard
                    key={key}
                    cartClicked={props.cartClicked}
                    product_pk={product.pk}
                    labelPromo={product.label} 
                    labelPromoStyle={'onSale'} 
                    labelPromoDisabled={product.label != '' ? false : true}
                    labelStock={'En Stock'}
                    labelStockStyle={'onStock'}
                    imageURL={product.image.replace(':8080','')}
                    imageAlt={product.alt}
                    productName={product.name}
                    price={`$ ${product.price}`}
                  />
                </div> : null}
              </>)
            })}
          </div>                
          <ButtonArrow 
            right={true}
            text={'▶'}
            style={'buttonArrow'}
            onClick={() => handleClick('+')}
          />
        </div>
    </div>
  );
}

export default ProductRow;