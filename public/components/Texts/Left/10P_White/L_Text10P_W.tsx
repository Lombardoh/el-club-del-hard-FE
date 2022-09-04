import React from 'react';
import styles from './L_Text10P_W.styles';

export default function L_Text10P_W(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
