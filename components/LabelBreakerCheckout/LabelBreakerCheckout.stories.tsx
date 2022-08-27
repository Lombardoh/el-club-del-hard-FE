import React from 'react';
import LabelBreakerCheckout from './LabelBreakerCheckoutUserData';

export default {
    title: 'labels/LabelBreakerCheckout',
    Component: LabelBreakerCheckout,
};

export const LabelBreakerCheckoutStorie = (args:{
    text: string;
    style: string;
    disabled?: boolean;
}) => (
    <LabelBreakerCheckout 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
    />
);

LabelBreakerCheckoutStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

LabelBreakerCheckoutStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}