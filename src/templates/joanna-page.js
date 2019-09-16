import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import DetailPageLayout from '../components/Layouts/DetailPageLayout/DetailPageLayout'

export const JoannaPageTemplate = ({ title, subtitle, heroImage, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <DetailPageLayout 
      title={title}
      subtitle={subtitle}
      heroImage={heroImage}
    >
         <PageContent className="content" content={content} />
    </DetailPageLayout>
  )
}

JoannaPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const JoannaPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <JoannaPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        heroImage={post.frontmatter.heroImage}
        content={post.html}
      />
    </Layout>
  )
}

JoannaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default JoannaPage

export const joannaPageQuery = graphql`
  query joannaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        heroImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
