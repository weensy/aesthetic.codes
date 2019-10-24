import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class Tags extends Component {
  render() {
    const { tags } = this.props;
    return (
      // <div className="post-tag-container">
      <span>
        {tags &&
          tags.map(tag => (
            <span>
            <Link className="testing"
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/tags/${_.kebabCase(tag)}`}
            >
            #{tag}
            </Link>
            {" "}</span>
          ))}
      </span>
      // </div>
    );
  }
}

export default Tags;