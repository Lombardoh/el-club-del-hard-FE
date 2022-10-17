import React from 'react';
import ButtonCartHeader from './ButtonWishHeader';

export default {
    title: 'button/ButtonCartHeader',
    Component: ButtonCartHeader,
};

export const ButtonCartHeaderStorie = (args:{}) => (
    <ButtonCartHeader/>
);

ButtonCartHeaderStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonCartHeaderStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}