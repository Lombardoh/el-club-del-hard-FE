import React from 'react';
import styles from './L_Text20P_B.styles';

export default function L_Text20P_B(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
