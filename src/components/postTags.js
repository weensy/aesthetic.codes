import React, { Component } from "react";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            {tag}
          ))}
      </div>
    );
  }
}

export default PostTags;