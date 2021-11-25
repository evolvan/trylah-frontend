// material
import { Grid, Container } from '@mui/material'
// hooks
import useSettings from '../../../hooks/useSettings'
// components

import BlogPostCard from './BlogPostCard'
// query
import { useGetBlogPostsQuery } from '../../../graphql/wordpress/@generated-codes-wp'
//
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'

// ----------------------------------------------------------------------

export default function BlogPosts() {
  const { themeStretch } = useSettings()

  const { data, loading, error } = useGetBlogPostsQuery({
    variables: { name: ['BLOG'] },
    context: { clientName: 'cms' }
  })

  //loading spinner
  if (loading) return <LoadingScreen />
  //error screen
  if (error) return <ErrorScreen message={error.message} />
  // data
  const blogPosts = data?.categories?.nodes?.[0]?.posts?.nodes

  return blogPosts ? (
    <Container maxWidth={themeStretch ? false : 'lg'}>
      <Grid container spacing={3}>
        {blogPosts.map((post: any, index: any) => (
          <BlogPostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  ) : (
    <ErrorScreen message={'Something went wrong while loading blog posts.'} />
  )
}
