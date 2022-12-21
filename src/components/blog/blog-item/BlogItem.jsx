import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import BlogAuthor from "../blog-author/BlogAuthor"
import "./styles.css"
import Blog from "../../../views/blog/Blog"

const BlogItem = ({ title, author, id, cover }) => {
  // const { title, cover, name, _id } = props
  return (
    <Link to={`/blog/${id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={cover} className="blog-cover" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor author={author} />
        </Card.Footer>
      </Card>
    </Link>
  )
}

export default BlogItem
