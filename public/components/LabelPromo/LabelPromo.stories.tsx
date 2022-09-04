import React from 'react';
import LabelPromo from './LabelPromo';

export default {
    title: 'labels/LabelPromo',
    Component: LabelPromo,
};

export const LabelPromoStorie = (args:{
    text: string;
    style: string;
    disabled?: boolean;
}) => (
    <LabelPromo 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
    />
);

LabelPromoStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

LabelPromoStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}