import React, { Component } from "react";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (

              <h2>{tag}</h2>
          ))}
      </div>
    );
  }
}

export default PostTags;