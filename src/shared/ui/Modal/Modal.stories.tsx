import type {Meta , StoryObj} from '@storybook/react-webpack5'
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
const meta = {
    component: Modal,
} satisfies Meta<typeof Modal>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Primary: Story = {
    args: {
        isOpen:true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque magni commodi magnam rerum modi tenetur, consequuntur blanditiis explicabo. Incidunt dignissimos porro inventore praesentium, quas dolor atque. Rem, quos molestiae.',
    },
};
export const Dark: Story = {
    args: {
        isOpen:true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque magni commodi magnam rerum modi tenetur, consequuntur blanditiis explicabo. Incidunt dignissimos porro inventore praesentium, quas dolor atque. Rem, quos molestiae.',
    },
};
Dark.decorators= [ThemeDecorator(Theme.DARK)]