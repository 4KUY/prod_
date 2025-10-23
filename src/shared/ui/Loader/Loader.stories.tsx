import type {Meta , StoryObj} from '@storybook/react-webpack5'
import { Loader } from './Loader';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
    component: Loader,
} satisfies Meta<typeof Loader>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const LoaderStory: Story = {
    args: {
    
    },
};
export const LoaderStoryDark: Story = {
    args: {
    },
};
LoaderStoryDark.decorators = [ThemeDecorator(Theme.DARK)];