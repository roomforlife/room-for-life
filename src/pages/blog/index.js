import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Layout from '../../components/Layout'
import Helmet from 'react-helmet'

import cx from 'classnames'
import bs from '../../components/Bootstrap.module.scss'
import blog from './blog-index.module.scss'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

export class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts} = data.allMarkdownRemark
    const { node: firstPost } = posts[0]
    return (
      <Layout>
          <Helmet title="Blog" />
          <div className={bs.container}>
            <h1 className={cx(bs.textCenter, bs.h1, bs.my4)}>Blog med meninger og erfaringer</h1>
            <p className={cx(bs.my5, bs.pxMd4)}>
              Jeg tror på, at vi forbindes gennem vores fortællinger. Derfor skriver jeg om oplevelser fra mit personlige liv på min blog.
              Intentionen er at inspirere - måske kan du bruge nogle af mine ord i dit eget liv?
              Jeg formidler også et menneskesyn, jeg tror på, og de ting, jeg arbejder for.
            </p>
            <div className={cx(blog.featuredPost, bs.dBlock, bs.my4, bs.p4)}>
            <div className={blog.card}>
                <PreviewCompatibleImage imageInfo={{image: firstPost.frontmatter.featuredimage, className: blog.firstPostImage}}/>
                <div className={blog.textContainer}>
                  <h3 className={cx(blog.postTitle, bs.h5, bs.my2)}>{firstPost.frontmatter.title}</h3>
                  <span className={blog.postDate}>{firstPost.frontmatter.date}</span>
                  <Link to={firstPost.fields.slug} className={blog.postButton}>Læs hele indlæg</Link>
                </div>
            </div>
            </div>
            <div>
              {posts && posts.map(({node: post}, i) => {
                if (i > 0) {
                  return (
                  <aside key={post.id} className={cx(blog.card, bs.my4, bs.p4)}>
                    <PreviewCompatibleImage imageInfo={{image: post.frontmatter.featuredimage, className: blog.firstPostImage}}/>
                      <div className={blog.textContainer}>
                      <Link to={post.fields.slug}>
                        <h3 className={cx(blog.postTitle, bs.h5, bs.my2)}>{post.frontmatter.title}</h3>
                        <span className={blog.postDate}>{post.frontmatter.date}</span>
                      </Link>
                      </div>
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
