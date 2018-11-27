import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Feed(props) {
  return (
    <div>
      {props.postList.map((post) => (
        <Post
          onUpVote={props.onUpVote}
          onDownVote={props.onDownVote}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}

Feed.propType = {
  postList: PropTypes.array
};


export default Feed;