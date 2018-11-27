import React from 'react';
import Feed from './Feed';
import Sidebar from './Sidebar';
import { v4 } from 'uuid';

class MainContent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [
        {
          username: 'connorM',
          time: new Date('December 17, 1995 03:24:00'),
          postContent: 'This is the post!!!!!',
          votes: 0,
          comments: [
            {
              username: 'chrisC',
              postContent: 'This is the comment!!!!!',
              time: new Date('December 18, 1995 03:24:00'),
              votes: 0,
              id: v4()
            }
          ],
          id: v4()
        },
        {
          username: 'chan',
          time: new Date('December 17, 1995 03:24:00'),
          postContent: 'This is the chan\'s post!!!!!',
          votes: 0,
          comments: [
            {
              username: 'chrisC',
              postContent: 'This is the chan\'s comment!!!!!',
              time: new Date('December 18, 1995 03:24:00'),
              votes: 0,
              id: v4()
            }
          ],
          id: v4()
        }
      ]
    };
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleNewPost(newPost){
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  handleUpVote(post, comment) {
    let newMasterPostList = this.state.masterPostList.slice();
    let postIndex = this.state.masterPostList.indexOf(post);
    if (comment) {
      let commentIndex = this.state.masterPostList[postIndex].comments.indexOf(comment);
      newMasterPostList[postIndex].comments[commentIndex].votes++;
    } else {
      newMasterPostList[postIndex].votes++;
    }
    this.setState({masterPostList: newMasterPostList});
  }

  handleDownVote(post, comment) {
    let newMasterPostList = this.state.masterPostList.slice();
    let postIndex = this.state.masterPostList.indexOf(post);
    if (comment) {
      let commentIndex = this.state.masterPostList[postIndex].comments.indexOf(comment);
      newMasterPostList[postIndex].comments[commentIndex].votes--;
    } else {
      newMasterPostList[postIndex].votes--;
    }
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    return(
      <div className='row main-body'>
        <style jsx>{`
        .main-body {
          min-height: 100vh;
          background-color: #dae0e6;
          padding: 50px 100px;
        }
      `}</style>
        <div className='col-md-9'>
          <Feed 
            postList = {this.state.masterPostList}
            onUpVote = {this.handleUpVote}
            onDownVote = {this.handleDownVote}
          />
        </div>
        <div className='col-md-3'>
          <Sidebar 
            onNewPost={this.handleNewPost}
          />
        </div>
      </div>
    );}
}

export default MainContent;