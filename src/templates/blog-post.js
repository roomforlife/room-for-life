import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import cx from 'classnames'

 import bs from '../components/Bootstrap.module.scss'
 import post from './blog-post.module.scss'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
  date,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <article className={cx(bs.container, bs.my5)}>
        {helmet || ''}
        <span className={cx(bs.dBlock, bs.mxAuto, bs.textCenter, bs.textUppercase)}>{date}</span>
        <h1 className={cx(bs.textCenter, bs.h1, bs.my4, post.title)}>{title}</h1>
        <div
          className={cx(bs.w100, bs.my5, post.featuredImage)}
          style={{
            backgroundImage: `url(${
              !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
            })`,
            backgroundPosition: `center`,
            backgroundSize: 'cover'
          }}
        >
        </div>
        <main className={post.postBody}>
          <p className={cx(post.description, bs.my4)}>{description}</p>
          <div className="container content">
            <PostContent content={content}/>
          </div>
        </main>
    </article>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
