import React from "react"
import { Link } from "gatsby"
import testpage from "../pages/testpage"

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
        <p>
        {props.node.frontmatter.map(tag => (
          {tag}
        ))}
        </p>
        <p>
        {props.node.frontmatter.date}
        </p>
      </div>
    </Link>
  </article>
)
