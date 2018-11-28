import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Feed(props) {
  return (
    <div>
      {props.postList.sort((a,b) => b.votes - a.votes).map((post) => (
        <Post
          onUpVote={props.onUpVote}
          onDownVote={props.onDownVote}
          post={post}
          timeOpen={post.timeOpen}
          onComment={props.onComment}
          key={post.id}
        />
      ))}
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Feed.propType = {
  postList: PropTypes.array,
  onComment: PropTypes.func,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};


export default Feed;