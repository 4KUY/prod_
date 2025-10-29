import 'app/styles/index.scss'
import { Decorator  } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers';

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    // eslint-disable-next-line react/display-name
        (Story) => (
            <ThemeProvider>
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
            
        );