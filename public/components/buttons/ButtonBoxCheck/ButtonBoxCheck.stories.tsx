import React from 'react';
import ButtonBoxCheck from './ButtonBoxCheck';

export default {
    title: 'button/ButtonBoxCheck',
    Component: ButtonBoxCheck,
};

export const ButtonBoxCheckStorie = (args:{}) => (
    <ButtonBoxCheck/>
);

ButtonBoxCheckStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonBoxCheckStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}