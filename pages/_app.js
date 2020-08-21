import '../styles/globals.scss'
import { Fragment } from 'react'
import { Guide } from '../AppComponents'
import GuideContextProvider from '../AppComponents/Context/GuideContext'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GuideContextProvider>
        <Guide />
        <div className='page_container'>
          <Component {...pageProps} />
        </div>
      </GuideContextProvider>

    </Fragment>
  )
}

export default MyApp
