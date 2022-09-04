import React from 'react';
import LabelStock from './LabelStock';

export default {
    title: 'labels/LabelStock',
    Component: LabelStock,
};

export const LabelStockStorie = (args:{
    text: string;
    style: string;
    disabled?: boolean;
}) => (
    <LabelStock 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
    />
);

LabelStockStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

LabelStockStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}