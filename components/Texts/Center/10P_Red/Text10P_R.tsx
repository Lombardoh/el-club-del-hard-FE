import React from 'react';
import styles from './Text10P_R.styles';

export default function Text10P_R(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
