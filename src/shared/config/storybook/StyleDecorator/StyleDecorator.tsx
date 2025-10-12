import 'app/styles/index.scss'
import { Decorator  } from '@storybook/react'

import { Theme } from 'app/providers';
export const StyleDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);