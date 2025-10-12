import type {Meta , StoryObj} from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
  component: AppLink,
} satisfies Meta<typeof AppLink>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const AppLinkPrimary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    to: '/',
    children: 'Home',
  },
};
export const AppLinkSecondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    to: '/',
    children: 'Home',
  },
};
export const AppLinkPrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    to: '/',
    children: 'Home',
  },
};
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const AppLinkSecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    to: '/',
    children: 'Home',
  },
};
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
