import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import Helmet from 'react-helmet'

import cx from 'classnames'
import bs from '../../components/Bootstrap.module.scss'
import blog from './blog-index.module.scss'

export class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts} = data.allMarkdownRemark
    const { node: firstPost } = posts[0]
    return (
      <Layout>
          <Helmet title="Blog" />
          <div className={bs.container}>
            <div className={cx(blog.featuredPost, bs.my4, bs.p4)}>
                {firstPost.frontmatter.title}
            </div>
            <div>
              {posts && posts.map(({node: post}, i) => {
                if (i > 0) {
                  return (
                    <aside key={post.id}>
                    {post.frontmatter.title}
                  </aside> 
                  )
                }
                return ''
              })}
            </div>
          </div>

      </Layout>
    )
  }
}



export default () => (
  <StaticQuery
    query={graphql`
      query BlogAllPostsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 450, quality: 85) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogIndexPage data={data} count={count} />}
  />
)
