import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonExample, Props } from '../src/components/ButtonExample';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: ButtonExample,
  argTypes: {
    children: {
      defaultValue: 'Primary button',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <ButtonExample {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary button',
  onClick: action('secondary clicked'),
};
