import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react'
import Home, { HomeProps } from '../components'

export default {
  title: 'Home',
  component: Home,
  argTypes: {
    direction: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const Base: Story<HomeProps> = (props) => <Home {...props} />;
Base.args = {
  title: 'Hello World',
};
