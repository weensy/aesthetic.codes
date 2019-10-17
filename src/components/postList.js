import React from "react"
import { Link } from "gatsby"
import PostTags from "../components/postTags"

export default props => (
  <article className="post-list">
    <div className="post-list-content">
      <PostTags tags={props.node.frontmatter.tags} />
      <Link to={props.node.fields.slug} className="post-list-link">
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
        <p>
          {props.node.excerpt}
        </p>
      </Link>
      <span>
        {props.node.frontmatter.date}
      </span>
    </div>
  </article>
)
