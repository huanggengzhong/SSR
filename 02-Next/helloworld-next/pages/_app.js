import React from 'react'
import App, { Container } from 'next/app'
import Mylayout from '../layouts/Mylayout'

class Layout extends React.Component {
  render () {
    const {children} = this.props
    return (
      <Mylayout>
        {children}
      </Mylayout>
    )
  }
}

export default class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  }
}