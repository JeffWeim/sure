import type { AppProps } from 'next/app'

import Layout from '../components/Layout'

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
