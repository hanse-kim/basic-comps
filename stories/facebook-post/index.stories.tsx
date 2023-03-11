import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FacebookPost } from '.';

export default {
  title: 'Example/Facebook Post',
  component: FacebookPost,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'facebook',
    },
  },
} as ComponentMeta<typeof FacebookPost>;

const Template: ComponentStory<typeof FacebookPost> = (args) => (
  <FacebookPost {...args} />
);

export const Default = Template.bind({});
Default.args = {};
