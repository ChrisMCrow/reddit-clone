import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Feed(props) {
  return (
    <div>
      {props.postList.sort((a,b) => b.votes - a.votes).map((post) => (
        <Post
          onUpVote={props.onUpVote}
          onDownVote={props.onDownVote}
          post={post}
          onComment={props.onComment}
          key={post.id}
        />
      ))}
    </div>
  );
}

Feed.propType = {
  postList: PropTypes.array,
  onComment: PropTypes.func
};


export default Feed;