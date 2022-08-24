import React from 'react';
import LabelBreakerUserData from './LabelBreakerUserData';

export default {
    title: 'labels/LabelBreakerUserData',
    Component: LabelBreakerUserData,
};

export const LabelBreakerUserDataStorie = (args:{
    text: string;
    style: string;
    disabled?: boolean;
}) => (
    <LabelBreakerUserData 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
    />
);

LabelBreakerUserDataStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

LabelBreakerUserDataStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}