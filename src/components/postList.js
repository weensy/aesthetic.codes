import React from "react"
import { Link } from "gatsby"
import PostTags from "../components/postTags"

export default props => (
  <article className="post-list">
    <Link to={props.node.fields.slug} className="post-list-link">
      <div className="post-list-content">
        <h2 className="post-list-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
        <p>
        {props.node.excerpt}
        </p>
        {/* <PostTags tags={props.node.frontmatter.tags} /> */}
        {props.node.frontmatter.tags.map(tag => (
          <h3>#{tag}</h3>
        ))}
        <p>
        {props.node.frontmatter.date}
        </p>
      </div>
    </Link>
  </article>
)
