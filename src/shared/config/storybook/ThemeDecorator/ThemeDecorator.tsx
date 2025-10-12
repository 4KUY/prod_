import 'app/styles/index.scss'
import { Decorator  } from '@storybook/react'
import { Theme } from 'app/providers';

import type { StoryFn } from '@storybook/react';
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);