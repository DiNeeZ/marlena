import React from 'react'
import Head from 'next/head'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Marlena | Group of Companies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout