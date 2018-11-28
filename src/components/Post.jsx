import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';



function Post(props) {

  let _comment = null;

  function handleUpVoteClick() {
    props.onUpVote(props.post);
  }

  function handleDownVoteClick() {
    props.onDownVote(props.post);
  }

  function handleFormSubmit() {
    props.onComment(props.post, {
      username: 'anonymousUser',
      postContent: _comment.value,
      time: new Date(),
      votes: 0,
      id: v4()
    });
    _comment.value = '';
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

        input {
          width: 80%;
          margin-right: 10px;
          float: left;
        }
      `}</style>
      <h4>{props.post.username}</h4>
      <p>{props.post.postContent}</p>
      <h5>
        <img onClick={handleUpVoteClick} className='arrow' src="https://img.icons8.com/ios-glyphs/50/000000/up.png" />
        {props.post.votes}
        <img onClick={handleDownVoteClick} className='arrow' src="https://img.icons8.com/ios-glyphs/50/000000/down.png"/>
      </h5>
      <form onSubmit={handleFormSubmit}>
        <input 
          className='form-control'
          placeholder='Comment...'
          ref={(input) => {_comment = input;}}
        />
        <button className='btn btn-primary'>Comment</button>
      </form>
      {props.post.comments.sort((a,b) => b.votes - a.votes).map((comment) => 
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
  onDownVote: PropTypes.func,
  onComment: PropTypes.func
};
export default Post;