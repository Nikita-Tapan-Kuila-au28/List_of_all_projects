import React from 'react';
import PostShare from './postparts/PostShare';
import Posts from "./postparts/Posts.jsx"
import "./PostSide.css";

const PostSide = () => {
  return (
    <div className="PostSide">
     <PostShare />
     <Posts />
    </div>
  )
}

export default PostSide