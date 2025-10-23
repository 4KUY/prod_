import type {Meta , StoryObj} from '@storybook/react-webpack5'
import { Button, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
    component: Button,
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Primary: Story = {
    args: {
        theme: ThemeButton.PRIMARY,
        children: 'Button',
    },
};
export const Secondary: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Button',
    },
};
export const Outlined: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
    },
};
export const OutlinedDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
    },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];