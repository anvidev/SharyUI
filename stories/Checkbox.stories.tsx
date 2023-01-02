import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, Props } from '../src/components/Checkbox';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;

const Template: Story<Props> = args => <Checkbox {...args} />;

export const TypeBox = Template.bind({});
TypeBox.args = {};

export const TypeChip = Template.bind({});
TypeChip.args = {
  variant: 'chip',
  id: 'exampleId',
  value: 2022,
};
