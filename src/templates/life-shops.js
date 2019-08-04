import React from 'react';
import Layout from '../components/Layout'
import DetailPageLayout from '../components/Layouts/DetailPageLayout/DetailPageLayout'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'

const ShopsPage = ({data}) => {
  const {markdownRemark: post} = data
  return(
    <Layout>
      <DetailPageLayout 
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      heroImage={post.frontmatter.heroImage}
      >
        <HTMLContent className="content" content={post.html} />
      </DetailPageLayout>
  </Layout>
  )
}

export default ShopsPage


export const shopsPageQuery = graphql`
  query ShopsPage($id: String!) {
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
