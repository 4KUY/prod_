import type {Meta , StoryObj} from '@storybook/react'
import { PageError } from './PageError';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
  component: PageError,
} satisfies Meta<typeof PageError>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const PageErrorLight: Story = {
  args: {
    
  },
};
export const PageErrorDark: Story = {
  args: {
    
  },
};

PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];