import React from 'react';
import Comment from './Comment';
import PropTypes from "prop-types";


function Post(props) {
  return (
    <div>
      <h4>{props.username}</h4>
      <p>{props.postContent}</p>
      <h5>{props.votes}</h5>
      {props.comments.map((comment) => 
        <Comment
          username={comment.username}
          postContent={comment.postContent}
          time={comment.time}
          votes={comment.votes}
          key={comment.id}
          />
      )}
    </div>
  )
}

Post.propTypes = {
  username: PropTypes.string,
  time: PropTypes.object,
  postContent: PropTypes.string,
  votes: PropTypes.number,
  comments: PropTypes.array

}
export default Post;