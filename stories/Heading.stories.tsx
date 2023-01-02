import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading, Props } from '../src/components/Heading';

const meta: Meta = {
  title: 'Components/Atoms/Heading',
  component: Heading,
};

export default meta;

const Template: Story<Props> = args => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  children: 'Heading',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  as: 'h2',
  children: 'Heading',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  as: 'h3',
  children: 'Heading',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  as: 'h4',
  children: 'Heading',
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
  children: 'Heading',
};

export const Purple = Template.bind({});
Purple.args = {
  color: 'purple',
  children: 'Heading',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  children: 'Heading',
};
