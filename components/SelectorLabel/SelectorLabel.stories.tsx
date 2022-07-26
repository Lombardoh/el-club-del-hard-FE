import React from 'react';
import SelectorLabel from './SelectorLabel';

export default {
    title: 'path/to/SelectorLabel',
    Component: SelectorLabel,
};

export const SelectorLabelStorie = (args:{
    text: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <SelectorLabel 
        text={args.text}
        disabled={args.disabled}
        onClick={Function}
    />
);

SelectorLabelStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'}
}

SelectorLabelStorie.args ={
    text: 'Test text',
    onClick: () => alert('hello there'),
    disabled: false,
}