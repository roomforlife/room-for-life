import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Navbar from './Navbar/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="da-DK" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1,  minimum-scale=1"/>
        <link 
          rel="apple-touch-icon"
          href="apple-icon-180x180.png">
        </link>
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        {/* <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        /> */}
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image-rfl.jpg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154119700-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());1

          gtag('config', 'UA-154119700-1');
        </script>


      </Helmet>
      <Navbar />
      <div style={{
        paddingTop: '60px'
      }}>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
