import React, { Component, createContext } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

export const PostsContext = createContext();

class PostProvider extends Component {
  state = {
    posts: []
  };

  unsuscribeFromFirestore = null;

  componentDidMount = async() => {
    this.unsuscribeFromFirestore = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromFirestore();
  }

  render() {
    const { posts } = this.state;
    const { children } = this.props;

    return (
      <PostsContext.Provider value={posts}>
        { children }
      </PostsContext.Provider>
    )
  }

}

export default PostProvider;