import type {Meta , StoryObj} from '@storybook/react-webpack5'
import {NotFoundPage}  from '../';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
    component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const NotFoundPageStory: Story = {
    args: {
    
    },
};
export const NotFoundPageStoryDark: Story = {
    args: {
    },
};
NotFoundPageStoryDark.decorators = [ThemeDecorator(Theme.DARK)];