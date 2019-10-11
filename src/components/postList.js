import React from "react"
import { Link } from "gatsby"
import PostTags from "../components/postTags"

export default props => (
  <article className="post-list">
    <PostTags tags={props.node.frontmatter.tags} />
    
      <div className="post-list-content">
      <Link to={props.node.fields.slug} className="post-list-link">
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
      </Link>
        <h6>
          {props.node.excerpt}
        </h6>
      </div>
    <p>
      {props.node.frontmatter.date}
    </p>
  </article>
)
