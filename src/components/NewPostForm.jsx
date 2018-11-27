import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props){
  let _post = null;

  function handlePostButton(event){
    event.preventDefault();
    props.onNewPost({
      username: 'connorM',
      time: new Date(),
      postContent: _post.value,
      votes: 0,
      comments: [],
      id: v4()
    });
    _post.value = '';
  }

  return(
    <div>
      {/* <form onSubmit={()=> props.onNewPost(_post)}> */}
      <form onSubmit={handlePostButton}>
        <input
          type='text'
          id='post'
          placeholder='Add your post'
          ref={(input) => {_post = input;}}
        />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

NewPostForm.PropTypes = {
  onNewPost: PropTypes.func
};
export default NewPostForm;