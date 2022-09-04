import React from 'react';
import styles from './Text24P_B.styles';

export default function Text24P_B(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
