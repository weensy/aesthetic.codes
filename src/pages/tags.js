import React from "react"
import _ from "lodash";
import { Link } from "gatsby";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const TagIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.distinct

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Tags"
      />
      <header className="tag-page-head">
          <h1 className="page-head-title">Tags({tags.length})</h1>
      </header>
      <div className="tag-container">
        {tags.map( tag => {
          return(
            <div className="tag-box">
              <Link className="post-card-tag-link"
              key={tag}
              // style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
              >
              #{tag}
              </Link>
            </div>)
          })}
        </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <TagIndex props data={data} />
    )}
  />
)
