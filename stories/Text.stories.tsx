import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, Props } from '../src/components/Text';

const meta: Meta = {
  title: 'Components/Atoms/Text',
  component: Text,
};

export default meta;

const Template: Story<Props> = args => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: 'Small Text',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium Text',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Text',
  size: 'large',
};

export const NormalText = Template.bind({});
NormalText.args = {
  children: 'Normal Text',
  weight: 'normal',
};

export const MediumText = Template.bind({});
MediumText.args = {
  children: 'Medium Text',
  weight: 'medium',
};

export const SemiboldText = Template.bind({});
SemiboldText.args = {
  children: 'Semibold Text',
  weight: 'semibold',
};

export const BlackText = Template.bind({});
BlackText.args = {
  children: 'Black Text',
  color: 'black',
};

export const PurpleText = Template.bind({});
PurpleText.args = {
  children: 'Purple Text',
  color: 'purple',
};

export const GreenText = Template.bind({});
GreenText.args = {
  children: 'Green Text',
  color: 'green',
};

export const ParagraphText = Template.bind({});
ParagraphText.args = {
  children: 'Paragraph Text',
  as: 'p',
};

export const SpanText = Template.bind({});
SpanText.args = {
  children: 'Span Text',
  as: 'span',
};
