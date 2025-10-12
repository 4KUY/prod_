import type {Meta , StoryObj} from '@storybook/react'
import { Navbar } from './Navbar';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
  component: Navbar,
} satisfies Meta<typeof Navbar>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const NavbarLight: Story = {
  args: {
    
  },
};
export const NavbarDark: Story = {
  args: {
    
  },
};

NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];