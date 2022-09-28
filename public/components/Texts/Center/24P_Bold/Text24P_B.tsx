import React from 'react';
import styles from './Text24P_B.styles';

export default function Text24P_B(props: { text?: string; number?: number; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text || props.number}
    </span>
  );
}
