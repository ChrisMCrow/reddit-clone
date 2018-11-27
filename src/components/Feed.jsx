import React from 'react';
import Post from './Post';
import { v4 } from 'uuid';


function Feed() {

  let masterPostList = [
    {
      username: "connorM",
      time: new Date('December 17, 1995 03:24:00'),
      postContent: "This is the post!!!!!",
      votes: 0,
      comments: [
        {
          username: "chrisC",
          postContent: "This is the comment!!!!!",
          time: new Date('December 18, 1995 03:24:00'),
          votes: 0,
          id: v4()
        }
      ],
      id: v4()
    },
    {
      username: "chan",
      time: new Date('December 17, 1995 03:24:00'),
      postContent: "This is the chan's post!!!!!",
      votes: 0,
      comments: [
        {
          username: "chrisC",
          postContent: "This is the chan's comment!!!!!",
          time: new Date('December 18, 1995 03:24:00'),
          votes: 0,
          id: v4()
        }
      ],
      id: v4()
    }

  ]
  return (
    <div>
      <h1>Feed</h1>
      <div>
        {masterPostList.map((post) => (
          <Post 
          username={post.username}
          time={post.time}
          postContent={post.postContent}
          votes={post.votes}
          comments={post.comments}
          key={post.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;