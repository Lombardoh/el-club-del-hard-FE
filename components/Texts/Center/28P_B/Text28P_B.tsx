import React from "react";
import styles from "./Text28P_B.styles";	

export default function Text28P_B(props: {text:string, ariaHidden?: boolean}) {
    return (
        <span className={ styles.text } aria-hidden={props.ariaHidden}>{props.text}</span>
    )
}