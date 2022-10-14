import styles from './ToolOption.styles';
import { useEffect, useState } from 'react';
import NextLink from '../../../node_modules/next/link';

function ToolOption(props:{
    title: string,
    url: string,
    description?: string
}){

return (<div className={styles.container}>
  <div className={styles.title}>
  <NextLink  href={props.url} >
    <a>{props.title}</a>
  </NextLink>
  </div>
  <div className={styles.description}>{props.description}</div>
</div>);
}

export default ToolOption;