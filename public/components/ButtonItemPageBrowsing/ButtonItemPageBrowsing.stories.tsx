import React from 'react';
import ButtonItemPageBrowsing from './ButtonItemPageBrowsing';

export default {
    title: 'button/ButtonItemPageBrowsing',
    Component: ButtonItemPageBrowsing,
};

export const ButtonItemPageBrowsingStorie = (args:{
    text: string;
    style: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <ButtonItemPageBrowsing 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
        onClick={Function}
    />
);

ButtonItemPageBrowsingStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonItemPageBrowsingStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}