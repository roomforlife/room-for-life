import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
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
            <h1 className={cx(bs.textCenter, bs.h1, bs.my4)}>Blog</h1>
            <Link to={firstPost.fields.slug} className={cx(blog.featuredPost, bs.dBlock, bs.my4, bs.p4)}>
                {firstPost.frontmatter.title}
              </Link>
            <div>
              {posts && posts.map(({node: post}, i) => {
                if (i > 0) {
                  return (
                    <aside key={post.id}>
                   <Link to={post.fields.slug} className={cx(bs.dBlock, bs.my2)}>{post.frontmatter.title}</Link>
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
