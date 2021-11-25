import { useParams } from 'react-router-dom'
import FaqsList from './FaqsList'
import ErrorScreen from '../../ErrorScreen'

export default function FaqsListWrapper() {
  const { categoryName } = useParams()

  return categoryName ? (
    <FaqsList categoryName={categoryName} />
  ) : (
    <ErrorScreen message="Invalid (possibly empty) category name while loading FAQs." />
  )
}
