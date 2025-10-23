import type {Meta , StoryObj} from '@storybook/react-webpack5'
import { Sidebar } from './Sidebar';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
const meta = {
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Light: Story = {
    args: {
    
    },
};
export const Dark: Story = {
    args: {
    
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];