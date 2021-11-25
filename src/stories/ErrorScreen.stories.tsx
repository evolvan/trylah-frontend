import ErrorScreen from '../components/ErrorScreen'

import { ComponentMeta } from '@storybook/react'

export default {
  title: 'ErrorScreen'
} as ComponentMeta<typeof ErrorScreen>

export const Default = () => <ErrorScreen message="This is a test error message" />
