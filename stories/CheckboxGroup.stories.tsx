import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CheckboxGroup, Props } from '../src/components/CheckboxGroup';

const meta: Meta = {
  title: 'Components/Molecules/CheckboxGroup',
  component: CheckboxGroup,
};

export default meta;

const Template: Story<Props> = args => <CheckboxGroup {...args} />;

export const TypeBox = Template.bind({});
TypeBox.args = {
  name: 'exampleName',
  id: 'exampleId',
  value: false,
  label: 'This is a checkbox group',
};

export const TypeBoxRequired = Template.bind({});
TypeBoxRequired.args = {
  name: 'exampleName',
  id: 'exampleId',
  value: false,
  label: 'This is a required checkbox group',
  required: true,
};

export const TypeChip = Template.bind({});
TypeChip.args = {
  variant: 'chip',
  name: 'exampleName',
  id: 'exampleId',
  value: false,
  label: 'This is a checkbox group',
};

export const TypeChipRequired = Template.bind({});
TypeChipRequired.args = {
  variant: 'chip',
  name: 'exampleName',
  id: 'exampleId',
  value: false,
  label: 'This is a checkbox group',
  required: true,
};
