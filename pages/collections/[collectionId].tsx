import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const collection: NextPage = () => {
  const router = useRouter()

  return <h2>{router.query.collectionId}</h2>
}

export default collection
