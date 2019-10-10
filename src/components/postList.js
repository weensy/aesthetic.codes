import React from "react"
import { Link } from "gatsby"
import PostTags from "../components/postTags"

export default props => (
  <article className="post-list">
    <Link to={props.node.fields.slug} className="post-list-link">
      <div className="post-list-content">
        <PostTags tags={props.node.frontmatter.tags} />
        <h2 className="post-list-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
        <h3>
        {props.node.excerpt}
        </h3>
        <p>
        {props.node.frontmatter.date}
        </p>
      </div>
    </Link>
  </article>
)
