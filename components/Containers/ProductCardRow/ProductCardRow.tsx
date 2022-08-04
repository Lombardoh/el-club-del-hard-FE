import styles from './ProductCardRow.styles';
import { useState, useEffect } from 'react';

function ProductCardRow(props: {
    children?: any,
    disabled: boolean,
    lastRow?: boolean,
})
{
    let currentClass = props.disabled ? styles.noPromo : styles.container;
    currentClass += props.lastRow ? ' ' + styles.lastRow : '';
    return (
        <div
            className = {currentClass}
        >
            {props.children}
        </div>
    );
}

export default ProductCardRow;