import App from '../components/App'
import Header from '../components/Header'
import InfoBox from '../components/InfoBox'
import BookList, { ALL_BOOKS_QUERY } from '../components/BookList'
import { addApolloState, initializeApollo } from '../lib/apolloClient'

const SSRPage = () => (
  <App>
    <Header />
    <InfoBox>ℹ️ This page shows how to use SSR with Apollo.</InfoBox>
    <BookList />
  </App>
)

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_BOOKS_QUERY,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

export default SSRPage
