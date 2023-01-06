import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, Props } from '../src/components/Select';

const options = [
  { label: 'Banana 🍌', value: 'banana' },
  { label: 'Strawberry 🍓', value: 'strawberry' },
  { label: 'Apple 🍏', value: 'apple' },
  { label: 'Orange 🍊', value: 'orange' },
  { label: 'Blueberries 🫐', value: 'blueberry' },
  { label: 'Watermelon 🍉', value: 'watermelon' },
  { label: 'Mango 🥭', value: 'mango' },
  { label: 'Avocado 🥑', value: 'avocado' },
];

const meta: Meta = {
  title: 'components/Atoms/Select',
  component: Select,
};

export default meta;

const Template: Story<Props> = args => <Select {...args} />;

export const SelectNoSearch = Template.bind({});
SelectNoSearch.args = {
  placeholder: 'Select an option',
  options: options,
  onChange: (selection: any) => console.log(selection),
};

export const SelectWithSearch = Template.bind({});
SelectWithSearch.args = {
  placeholder: 'Select an option',
  options: options,
  isSearchable: true,
  onChange: (selection: any) => console.log(selection),
};
