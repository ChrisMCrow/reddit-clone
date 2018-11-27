import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';


function Post(props) {

  function handleUpVoteClick() {
    props.onUpVote(props.post);
  }

  function handleDownVoteClick() {
    props.onDownVote(props.post);
  }
  
  return (
    <div className = 'post-container'>
      <style jsx>{`
        .post-container {
          background-color: white;
          border: 1px solid lightgray;
          border-radius: 3px;
          margin: 10px 0;
          padding: 10px;
        }

        .arrow {
          height: 30px;
          cursor: pointer;
        }
      `}</style>
      <h4>{props.post.username}</h4>
      <p>{props.post.postContent}</p>
      <h5>
        <img onClick={handleUpVoteClick} className='arrow' src="https://img.icons8.com/ios-glyphs/50/000000/up.png" />
        {props.post.votes}
        <img onClick={handleDownVoteClick} className='arrow' src="https://img.icons8.com/ios-glyphs/50/000000/down.png"/>
      </h5>
      {props.post.comments.map((comment) => 
        <Comment
          onUpVote={props.onUpVote}
          onDownVote={props.onDownVote}
          post={props.post}
          comment={comment}
          key={comment.id}
        />
      )}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};
export default Post;