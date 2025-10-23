import type {Meta , StoryObj} from '@storybook/react-webpack5'
import MainPage from './MainPage';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
    component: MainPage,
} satisfies Meta<typeof MainPage>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const MainPageStory: Story = {
    args: {
    
    },
};
export const MainPageStoryDark: Story = {
    args: {
    },
};
MainPageStoryDark.decorators = [ThemeDecorator(Theme.DARK)];