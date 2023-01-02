import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, Props } from '../src/components/Avatar';

const meta: Meta = {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
};

export default meta;

const Template: Story<Props> = args => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  imageURL: 'https://i.pravatar.cc/150?img=1',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  imageURL: 'https://i.pravatar.cc/150?img=1',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  imageURL: 'https://i.pravatar.cc/150?img=1',
};

export const Xlarge = Template.bind({});
Xlarge.args = {
  size: 'xl',
  imageURL: 'https://i.pravatar.cc/150?img=1',
};
