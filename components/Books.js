import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const query = gql`
  query {
    books{
      title
      author
    }
  }
`

const Books = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>

      return data.books.map(({ title, author }, i) => (
        <div key={i}>
          <p>{`${title} by ${author}`}</p>
        </div>
      ))
    }}
  </Query>
)

export default Books