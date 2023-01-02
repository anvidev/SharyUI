import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/components/Button';

const meta: Meta = {
  title: 'Components/Atoms/Button',
  component: Button,
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello World',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Hello World',
  variant: 'secondary',
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  children: 'Hello World',
  variant: 'outline-primary',
};

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  children: 'Hello World',
  variant: 'outline-secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Hello World',
  variant: 'ghost',
};
