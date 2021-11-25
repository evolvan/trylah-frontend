// material
import { Box, Card, Container, Typography } from '@mui/material'
// components
import Markdown from '../../Markdown'
import BlogPostHero from './BlogPostHero'
//
import { useGetBlogPostQuery } from '../../../graphql/wordpress/@generated-codes-wp'
//
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'
//----------------------------------------------------------------------------------

export default function BlogPost({ blogPostId }: { blogPostId: any }) {
  const { data, loading, error } = useGetBlogPostQuery({
    variables: { id: blogPostId },
    context: { clientName: 'cms' }
  })

  //loading spinner
  if (loading) return <LoadingScreen />
  //error screen
  if (error) return <ErrorScreen message={error.message} />
  //data

  const cover = data?.post?.featuredImage?.node?.sourceUrl
  const title = data?.post?.title
  const author = data?.post?.author?.node?.firstName
  const createdAt = data?.post?.date
  const excerpt = data?.post?.excerpt
  const content = data?.post?.content

  return (
    <Container>
      <Card>
        <BlogPostHero cover={cover} title={title} author={author} createdAt={createdAt} />
        <Box sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="subtitle1" sx={{ mb: 5, color: 'text.disabled' }}>
            <Markdown children={excerpt!} />
          </Typography>
          <Container maxWidth="md">
            <Markdown children={content!} />
          </Container>
        </Box>
      </Card>
    </Container>
  )
}
