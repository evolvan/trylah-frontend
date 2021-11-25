import { useParams } from 'react-router-dom'

import BlogPost from './BlogPost'
import ErrorScreen from '../../ErrorScreen'

export default function BlogPostWrapper() {
  const { blogPostTitle } = useParams()

  return blogPostTitle ? (
    <BlogPost blogPostId={blogPostTitle.split('-').splice(-1)[0]} />
  ) : (
    <ErrorScreen message="Invalid (possibly empty) blog title while loading blogpost." />
  )
}
