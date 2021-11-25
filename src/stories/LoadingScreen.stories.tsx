import LoadingScreen from '../components/LoadingScreen'

import { ComponentMeta } from '@storybook/react'

export default {
  title: 'LoadingScreen'
} as ComponentMeta<typeof LoadingScreen>

export const Default = () => <LoadingScreen />
