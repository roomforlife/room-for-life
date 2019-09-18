import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import cx from 'classnames'

import bs from '../Bootstrap.module.scss'
import blogRoll from './BlogRoll.module.scss'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className={cx(blogRoll.section, bs.py5)}>
        <div className={cx(bs.container)}>
          <h2 className={cx(bs.mb5, bs.h1, bs.textCenter, bs.fontFamilySerif)}>Blog</h2>
          <div className={cx(bs.row, bs.justifyContentAround)}>
            {posts && posts.map(({node: post}) => (
              <Link to={post.fields.slug} className={cx(blogRoll.card, bs.col12, bs.colMd5)} key={post.id}>
                <div className={blogRoll.image}>
                  <PreviewCompatibleImage imageInfo={{image:post.frontmatter.featuredimage}} />
                </div>
                <p className={cx(bs.h6, bs.fontWeightBold, bs.textUppercase, bs.my3, blogRoll.postTitle, bs.dBlock)}>
                  {post.frontmatter.title}
                  </p>
                <p>{post.frontmatter.description}</p>
              </Link>
            ))}
          </div>
          <div className={cx(bs.textCenter, bs.my5)}>
            <Link to="/blog" className={blogRoll.viewAllBtn}>View all posts</Link>
          </div>
        </div>
      </section>
     
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          limit: 2
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
