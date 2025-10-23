import 'app/styles/index.scss'
import { Decorator  } from '@storybook/react'
import { Theme } from 'app/providers';

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    // eslint-disable-next-line react/display-name
        (Story) => (
            <div className={`app ${theme}`}>
                <Story />
            </div>
        );