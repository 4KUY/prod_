import type {Meta , StoryObj} from '@storybook/react'
import {AboutPage}  from '../';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
  component: AboutPage,
} satisfies Meta<typeof AboutPage>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const AboutPageStory: Story = {
  args: {
    
  },
};
export const AboutPageStoryDark: Story = {
  args: {
  },
};
AboutPageStoryDark.decorators = [ThemeDecorator(Theme.DARK)];