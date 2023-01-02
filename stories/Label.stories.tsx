import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Label, Props } from '../src/components/Label';

const meta: Meta = {
  title: 'components/Label',
  component: Label,
};

export default meta;

const Template: Story<Props> = args => <Label {...args} />;

export const NotRequired = Template.bind({});
NotRequired.args = {
  children: 'Not required label',
  inputId: 'exampleId',
};

export const Required = Template.bind({});
Required.args = {
  children: 'Required label',
  inputId: 'exampleId',
  required: true,
};
