import React, { Component } from "react";
import { Link } from "gatsby"
import Tags from "../components/tags"

export default props => (
  <article
    className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
      props.postClass
    } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
      }
    }
  >
      {
        props.node.frontmatter.thumbnail
          ?(<ContentWithImage props={props}/>)
          :(<ContentNoImage props={props}/>)
      }
  </article>
)

class ContentNoImage extends Component {
  render() {
    const{props}=this.props;
    return (
      <div className="post-card-content">
        <Tags tags={props.node.frontmatter.tags}/>
        <Link to={props.node.fields.slug} className="post-card-link">
          <h2 className="post-card-title">
            {props.node.frontmatter.title || props.node.fields.slug}
          </h2>
        </Link>
        {props.node.frontmatter.date}
        {props.node.frontmatter.description || props.node.excerpt}
        <Link to={props.node.fields.slug} className="post-card-link">
          {
            props.node.frontmatter.description || props.node.excerpt
              ?("Read more")
              :(null)
          }
        </Link>
      </div>
    );
  }
}

class ContentWithImage extends Component {
  render() {
    const{props}=this.props;
    return (
      <Link to={props.node.fields.slug} className="post-card-link">
        <div className="post-card-content">
          <h2 className="post-card-title">
            {props.node.frontmatter.title || props.node.fields.slug}
          </h2>
        </div>
      </Link>
    );
  }
}