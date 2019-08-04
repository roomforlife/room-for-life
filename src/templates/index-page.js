import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import cx from 'classnames'

import Layout from '../components/Layout'
import Features from '../components/Features/Features'
import Mission from '../components/Mission/Mission'
import BlogRoll from '../components/BlogRoll/BlogRoll'

import bs from '../components/Bootstrap.module.scss'
import ip from './index-page.module.scss'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className={ip.heroImage}
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className={cx(ip.headerContainer, bs.container)}>
        <div className={cx(ip.logoWrapper)}>
          <img src="/img/RFL_FULL_ORANGE.png" alt="" className={cx(ip.logo, bs.p4)}/>
        </div>
          <h1 className={cx(ip.title, bs.textWhite, bs.textCenter, bs.mx4, bs.p4)}>Creating possibilities through language.</h1>
      </div>
    </div>
    <Features gridItems={intro.blurbs}/>
    <Mission />
    <BlogRoll />
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 350, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            url
            text
          }
          heading
          description
        }
      }
    }
  }
`
