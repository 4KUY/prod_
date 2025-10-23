import type {Meta , StoryObj} from '@storybook/react-webpack5'
import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const ThemeSwitcherStory: Story = {
    args: {
    
    },
};
export const ThemeSwitcherStoryDark: Story = {
    args: {
    },
};
ThemeSwitcherStoryDark.decorators = [ThemeDecorator(Theme.DARK)];