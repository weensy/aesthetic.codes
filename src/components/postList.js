import React from "react"
import { Link } from "gatsby"

const getTag = (tags) => {
  const listTags = []
  tags.forEach((tag,i) => {
    listTags.push(tag)
  })
}
export default props => (
  <article>
    <Link to={props.node.fields.slug} className="post-list-link">
      <div className="post-list-content">
        <h2 className="post-list-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
        {getTag(props.node.frontmatter.tags)
        (<p>)
          {listTags[1]}
        (</p>)
        }
      </div>
    </Link>
  </article>
)
