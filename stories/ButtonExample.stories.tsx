import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonExample, Props } from '../src/components/ButtonExample';

const meta: Meta = {
  title: 'Components/Atoms/ButtonExample',
  component: ButtonExample,
};

export default meta;

const Template: Story<Props> = args => <ButtonExample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello World',
  variant: 'primary',
};
