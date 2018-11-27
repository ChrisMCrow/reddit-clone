import React from 'react';
import PropTypes from "prop-types";


function Comment(props) {
  return (
    <div>
      <h4>{props.username}</h4>
      <p>{props.postContent}</p>
      <h5>{props.votes}</h5>
    </div>
  )
}

Comment.prototype={
  username: PropTypes.string,
  postContent: PropTypes.string,
  votes: PropTypes.number
}
export default Comment;