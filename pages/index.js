import App from '../components/App'
import Header from '../components/Header'
import InfoBox from '../components/InfoBox'
import BookList, { ALL_BOOKS_QUERY } from '../components/BookList'
import { addApolloState, initializeApollo } from '../lib/apolloClient'

const IndexPage = () => (
  <App>
    <Header />
    <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
    <BookList />
  </App>
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_BOOKS_QUERY,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}

export default IndexPage
