import React from "react"
import { Link } from "gatsby"
import PostTags from "../components/postTags"

export default props => (
  <article className="post-list">
    <PostTags tags={props.node.frontmatter.tags} />
    <Link to={props.node.fields.slug} className="post-list-link">
      <div className="post-list-content">
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
        <h4>
          {props.node.excerpt}
        </h4>  
      </div>
    </Link>
    <p>
      {props.node.frontmatter.date}
    </p>
  </article>
)
