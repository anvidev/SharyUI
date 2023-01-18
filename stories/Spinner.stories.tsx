import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner, Props } from '../src/components/Spinner';

const meta: Meta = {
  title: 'Components/Atoms/Spinner',
  component: Spinner,
};

export default meta;

const Template: Story<Props> = args => <Spinner {...args} />;

export const SpinnerPrimary = Template.bind({});
SpinnerPrimary.args = {
  color: 'primary',
  bgColor: 'secondary',
};

export const SpinnerSecondary = Template.bind({});
SpinnerSecondary.args = {
  color: 'secondary',
  bgColor: 'primary',
};

export const SpinnerBlack = Template.bind({});
SpinnerBlack.args = {
  color: 'black',
  bgColor: 'white'
};

export const SpinnerWhite = Template.bind({});
SpinnerWhite.args = {
  color: 'white',
  bgColor: 'black',
};

export const SpinnerSmall = Template.bind({});
SpinnerSmall.args = {
  size: 'small',
};

export const SpinnerMedium = Template.bind({});
SpinnerMedium.args = {
  size: 'medium',
};

export const SpinnerLarge = Template.bind({});
SpinnerLarge.args = {
  size: 'large',
};


