import { NetworkStatus, gql, useQuery } from '@apollo/client'

export const ALL_BOOKS_QUERY = gql`
  query {
    books {
      title
      author
    }
  }
`

export default function Books() {
  const { loading, error, data, networkStatus } = useQuery(ALL_BOOKS_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  const loadingMoreBooks = networkStatus === NetworkStatus.fetchMore

  if (error) return <ErrorMessage message="Error loading books." />
  if (loading && !loadingMoreBooks) return <div>Loading...</div>

  return data.books.map(({ title, author }, i) => (
    <div key={i}>
      <p>{`${title} by ${author}`}</p>
    </div>
  ))
}
