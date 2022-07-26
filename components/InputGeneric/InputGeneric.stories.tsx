import React from 'react';
import InputGeneric from './InputGeneric';

export default {
    title: 'path/to/InputGeneric',
    Component: InputGeneric,
};

export const InputGenericStorie = (args:{
    text: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <InputGeneric 
        text={args.text}
        disabled={args.disabled}
        onClick={Function}
    />
);

InputGenericStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'}
}

InputGenericStorie.args ={
    text: 'Test text',
    onClick: () => alert('hello there'),
    disabled: false,
}