import React from 'react'
import withData from './withData'
import PostList from './PostList'

const PostListWithData = withData(PostList,"https://jsonplaceholder.typicode.com/posts")

export default PostListWithData
