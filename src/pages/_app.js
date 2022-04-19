import { Provider } from 'react-redux'
import '../styles/globals.css'
import { store } from '../app/store'
import '../styles/index.css'
import '../styles/navbar.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
