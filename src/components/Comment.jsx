import React from 'react';
import PropTypes from 'prop-types';


function Comment(props) {

  function handleCommentUpVote() {
    props.onUpVote(props.post, props.comment);
  }

  function handleCommentDownVote() {
    props.onDownVote(props.post, props.comment);
  }

  return (
    <div className = 'comment-container'>
      <style jsx>{`
        .comment-container {
          margin: 10px 50px;
        }
        .arrow {
          height: 20px;
          cursor: pointer;
        }
      `}</style>
      <hr />
      <h4>{props.comment.username}</h4>
      <p>{props.comment.postContent}</p>
      <h6>
        <img onClick={handleCommentUpVote} className='arrow' src="https://img.icons8.com/ios-glyphs/50/000000/up.png" />
        {props.comment.votes}
        <img onClick={handleCommentDownVote} className='arrow' src="https://img.icons8.com/ios-glyphs/50/000000/down.png"/>
      </h6>
    </div>
  );
}

Comment.propType = {
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  post: PropTypes.object,
  comment: PropTypes.object
};
export default Comment;