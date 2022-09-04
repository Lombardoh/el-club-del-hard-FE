import React from "react";
import styles from "./Text32P.styles";	

export default function Text32P(props: {text:string, ariaHidden?: boolean}) {
    return (
        <span className={ styles.text } aria-hidden={props.ariaHidden}>{props.text}</span>
    )
}