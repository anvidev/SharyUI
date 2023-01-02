import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from '../src/components/Input';

const meta: Meta = {
  title: 'Components/Atoms/Input',
  component: Input,
};

export default meta;

const Template: Story<Props> = args => <Input {...args} />;

export const TypeText = Template.bind({});
TypeText.args = {
  type: 'text',
  inputId: 'exampleId',
  placeholder: 'Text placeholder',
};

export const TypePassword = Template.bind({});
TypePassword.args = {
  type: 'password',
  inputId: 'exampleId',
  placeholder: 'Password placeholder',
};

export const TypeEmail = Template.bind({});
TypeEmail.args = {
  type: 'email',
  inputId: 'exampleId',
  placeholder: 'Email placeholder',
};

export const TypeTextarea = Template.bind({});
TypeTextarea.args = {
  type: 'textarea',
  inputId: 'exampleId',
  placeholder: 'Email placeholder',
};
