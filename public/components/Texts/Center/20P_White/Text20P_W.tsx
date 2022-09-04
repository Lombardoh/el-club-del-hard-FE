import React from 'react';
import styles from './Text20P_W.styles';

export default function Text20P_W(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
