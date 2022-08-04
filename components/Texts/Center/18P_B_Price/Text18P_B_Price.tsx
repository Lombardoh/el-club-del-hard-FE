import React from 'react';
import styles from './Text18P_B_Price.styles';

export default function Text18P_B_Price(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
