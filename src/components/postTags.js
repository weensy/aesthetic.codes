import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <p>
            <Link
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/tags/${_.kebabCase(tag)}`}
            >
            #{tag}
          </Link>
           </p>
          ))}
      </div>
    );
  }
}

export default PostTags;