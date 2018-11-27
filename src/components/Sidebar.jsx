import React from 'react';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

function Sidebar(props) {
  return(
    <div>
      <NewPostForm
        onNewPost= {props.onNewPost}
      />
    </div>
  );
}

Sidebar.propType = {
  onNewPost: PropTypes.func
};

export default Sidebar;