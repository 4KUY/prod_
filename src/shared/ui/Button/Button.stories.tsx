import type {Meta , StoryObj} from '@storybook/react-webpack5'
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
    component: Button,
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Primary: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Button',
    },
};
export const Secondary: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
};
export const Outlined: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};
export const OutlinedL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        size: ButtonSize.L
    },
};
export const OutlinedXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        size: ButtonSize.XL
    },
};
export const OutlinedDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};
export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Button',
    },
};
export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
    },
};
export const Square: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
    },
};
export const SquareL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.L
    },
};
export const SquareXL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.XL
    },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];