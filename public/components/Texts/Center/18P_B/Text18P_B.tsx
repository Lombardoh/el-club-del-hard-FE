import React from 'react';
import styles from './Text18P_B.styles';

export default function Text18P_B(props: { text: string; ariaHidden?: boolean, color?: string }) {
  return (
    <span style={props.color ? { color: props.color} : null} className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
