import React from 'react';
import styles from './L_Text14P_W.styles';

export default function L_Text14P_W(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
