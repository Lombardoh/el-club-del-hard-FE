import React from 'react';
import LabelBreakerUserOrder from './LabelBreakerUserOrderUserData';

export default {
    title: 'labels/LabelBreakerUserOrder',
    Component: LabelBreakerUserOrder,
};

export const LabelBreakerUserOrderStorie = (args:{
    text: string;
    style: string;
    disabled?: boolean;
}) => (
    <LabelBreakerUserOrder 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
    />
);

LabelBreakerUserOrderStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

LabelBreakerUserOrderStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}