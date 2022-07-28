import React from 'react';
import ButtonBlueDelete from './ButtonBlueDelete';

export default {
    title: 'button/ButtonBlueDelete',
    Component: ButtonBlueDelete,
};

export const ButtonBlueDeleteStorie = (args:{
    text: string;
    style: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <ButtonBlueDelete 
        text={args.text}
        style={args.style}
        onClick={Function}
    />
);

ButtonBlueDeleteStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonBlueDeleteStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}