import React from 'react';
import ButtonArrow from './ButtonArrow';

export default {
    title: 'button/ButtonArrow',
    Component: ButtonArrow,
};

export const ButtonArrowStorie = (args:{
    text: string;
    style: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <ButtonArrow 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
        onClick={Function}
    />
);

ButtonArrowStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonArrowStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}