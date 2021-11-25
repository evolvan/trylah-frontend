import { noCase } from 'change-case'
//Icons
import { Icon } from '@iconify/react'
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill'
// material
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material'
import { varFadeIn, MotionInView } from '../../animate'
//
import Markdown from '../../Markdown'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'
//
import { fDate } from '../../../utils/formatTime'
//
import { useGetCategoryQuery } from '../../../graphql/wordpress/@generated-codes-wp'

// ----------------------------------------------------------------------

export default function FaqsList({ categoryName }: { categoryName: string }) {
  //query data
  const { data, loading, error } = useGetCategoryQuery({
    variables: { name: [noCase(categoryName)] },
    context: { clientName: 'cms' }
  })

  //loading spinner
  if (loading) return <LoadingScreen />
  //error screen
  if (error) return <ErrorScreen message={error.message} />

  //get posts
  const posts = data?.categories?.nodes?.[0]?.posts?.nodes

  return posts ? (
    <MotionInView variants={varFadeIn}>
      {posts.map((post: any) => (
        <Accordion key={post.id}>
          <AccordionSummary
            expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}
          >
            <Typography variant="h6" sx={{ color: 'text.primary' }}>
              {post.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.disabled', fontStyle: 'italic' }}>
              {`Last Updated: ${fDate(post.date)}`}
            </Typography>
            <Markdown children={post.content} />
          </AccordionDetails>
        </Accordion>
      ))}
    </MotionInView>
  ) : (
    <ErrorScreen message={`Opps, can't load FAQ: ${categoryName}`} />
  )
}
