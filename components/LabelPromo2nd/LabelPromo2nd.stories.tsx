import React from 'react';
import LabelPromo2nd from './LabelPromo2nd';

export default {
    title: 'labels/LabelPromo2nd',
    Component: LabelPromo2nd,
};

export const LabelPromo2ndStorie = (args:{
    text: string;
    style: string;
    disabled?: boolean;
}) => (
    <LabelPromo2nd 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
    />
);

LabelPromo2ndStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

LabelPromo2ndStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}