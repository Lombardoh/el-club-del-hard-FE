import React from 'react';
import styles from './L_Text14P.styles';

export default function L_Text14P(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
