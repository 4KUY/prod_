import 'app/styles/index.scss'
import { Decorator  } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/display-name
export const RouteDecorator = (): Decorator => (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);