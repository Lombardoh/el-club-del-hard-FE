import React from 'react';
import LabelBreaker from './LabelBreaker';

export default {
    title: 'labels/LabelBreaker',
    Component: LabelBreaker,
};

export const LabelBreakerStorie = (args:{
    text: string;
    style: string;
    disabled?: boolean;
}) => (
    <LabelBreaker 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
    />
);

LabelBreakerStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

LabelBreakerStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}