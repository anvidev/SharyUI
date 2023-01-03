import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, Props } from '../src/components/Radio';

const meta: Meta = {
  title: 'Components/Atoms/Radio',
  component: Radio,
};

export default meta;

const Template: Story<Props> = args => <Radio {...args} />;

export const TypeBox = Template.bind({});
TypeBox.args = {};

export const TypeChip = Template.bind({});
TypeChip.args = {
  variant: 'chip',
  id: 'exampleId',
  value: 2022,
};
