import React from 'react';
import { post } from './data.js';

import { IconButton } from './Button.js';

import bookmark from './assets/icons/bookmark.png'
import bookmark_full from './assets/icons/bookmark_full.png'
import comment from './assets/icons/comment.png'
import heart from './assets/icons/heart.png'
import heart_full from './assets/icons/heart_full.png'
import share from './assets/icons/share.png'

import './App.css';

class App extends React.Component {
  state = {
    liked: false,
    bookmarked: false,
  }

  changeLiked = () => this.setState(prevState => ({
    liked: !prevState.liked,
  }));

  changeBookmarked = () => this.setState(prevState => ({
    bookmarked: !prevState.bookmarked,
  }));

  render() {
    const {
      state: { liked, bookmarked },
      changeLiked,
      changeBookmarked,
    } = this;

    return (
      <div className="post">
        <img src={post.photo} className="photo"/>
        <div className="sidebar">
          <div className="header">
            <img src={post.user.avatar} className="profilePic" />
            <p><strong>{post.user.name}</strong></p>
          </div>
          <div className="comments">
            <div className="comment">
              <img src={post.user.avatar} className="profilePic" />
              <p className="text"><strong>{post.user.name}</strong> {post.description}</p>
            </div>
            {post.comments.map(comment => (
              <div className="comment" key={comment.id}>
                <img src={comment.user.avatar} className="profilePic" />
                <p className="text"><strong>{comment.user.name}</strong> {comment.text}</p>
              </div>
            ))}
          </div>
          <div className="actions">
            <div>
              <IconButton
                onClick={changeLiked}
                src={liked ? heart_full : heart}
              />
              <IconButton
                src={comment}
              />
              <IconButton
                src={share}
              />
            </div>
            <IconButton
              onClick={changeBookmarked}
              src={bookmarked ? bookmark_full : bookmark}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
