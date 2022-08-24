import React from 'react';
import styles from './Text16P_G.styles';

export default function Text16P_G(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
