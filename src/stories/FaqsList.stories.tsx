import FaqsList from '../components/_external-pages/faqs/FaqsList'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { gql } from '@apollo/client'

const QUERY = gql`
  query GetCategory($name: [String]) {
    categories(where: { name: $name }) {
      nodes {
        id
        name
        posts {
          nodes {
            id
            title
            content
          }
        }
      }
    }
  }
`

const CATEGORY = 'About Trylah'

export default {
  title: 'FaqsList'
} as ComponentMeta<typeof FaqsList>

const Template: ComponentStory<typeof FaqsList> = (args) => <FaqsList {...args} />

export const LoadingAndData = Template.bind({})
export const ErrorState = Template.bind({})

LoadingAndData.args = {
  categoryName: CATEGORY
}

ErrorState.args = {
  categoryName: CATEGORY
}

LoadingAndData.parameters = {
  apolloClient: {
    mocks: [
      {
        delay: 2000,
        request: {
          query: QUERY,
          variables: {
            name: ['About Trylah']
          }
        },
        result: {
          data: {
            categories: {
              nodes: [
                {
                  id: 'dGVybTo5',
                  name: 'About Trylah',
                  posts: {
                    nodes: [
                      {
                        id: 'cG9zdDo0Mw==',
                        title: 'How does TryLah earn money please?',
                        content:
                          '\n<p>With every successful purchase you make through TryLah from our affiliate store of your choice, the store pays us some amount as commission. Once the store validates and approves the transaction. The commission that we receive, we share part of it with you by rewarding TryLah stock to you. How do I collaborate with TryLah? You can get in touch with our business development team at business@trylah.sg</p>\n'
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
}

ErrorState.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: QUERY,
          variables: {
            name: ['About Trylah']
          }
        },
        result: {},
        error: new Error('This is a mock network error')
      }
    ]
  }
}
