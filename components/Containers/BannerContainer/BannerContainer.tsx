import React, {useEffect, useState} from 'react';
import styles from './BannerContainer.styles';
import Image from '../../../node_modules/next/image';

export const  CarouselItem = (props: {
  src: string
}) => {
  const [imgSize, setimgSize] = useState(
    { width: 1920, height: 500 }
  );
  const [imgLoaded, setImgLoaded] = useState(false);
    
    useEffect(() => {
        if(window.innerWidth){
            setImgLoaded(true);
            window.addEventListener('resize', () => {
              if(window.innerWidth > 768){
                setimgSize({ width: 1920, height: 500 });
              }else{
                setimgSize({ width: window.innerWidth, height: 130 });
              }
            });
        }
    }, [imgLoaded]);
  return(
      <Image
      width={imgSize.width}
      height={imgSize.height}
      src={`${props.src}`}
    />
  );
};

function BannerContainer(props: { 
  children: any
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    if (index >= 3){
      index = 0
    }
    setActiveIndex(index);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick(activeIndex + 1);
    }, 3000);
    return () => {
      if(interval){
        clearInterval(interval);
      }
    };
  });

  return (
    <div className={styles.carousel}>
      <div className={styles.inner} style={{
          transition: 'transform 0.3s',
          transform: `translateX(-${activeIndex*100}%)`
        }}>
          {React.Children.map(props.children, (child: any, index: number) => {
            return React.cloneElement(child, {
              key: index,
              width: "100%"
            });
          })}
      </div>
    </div>
  );
}

export default BannerContainer;
