import React from 'react';
import styles from './TextGeneric.styles';

export default function TextGeneric(props: { 
  text: string; 
  size?: number
  }){
  return (
    <div className={styles.text} style={{fontSize: props.size ? props.size : '12px'}}>
      {props.text}
    </div>
  );
}
