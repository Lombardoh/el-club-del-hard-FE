import React from 'react';
import ButtonSearchHeader from './ButtonSearchHeader';

export default {
    title: 'button/ButtonSearchHeader',
    Component: ButtonSearchHeader,
};

export const ButtonSearchHeaderStorie = (args:{}) => (
    <ButtonSearchHeader/>
);

ButtonSearchHeaderStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonSearchHeaderStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}