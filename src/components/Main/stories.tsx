import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado - Stories',
    description: 'TypeScript, ReactJS, NextJS e Styled Components - Stories'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
