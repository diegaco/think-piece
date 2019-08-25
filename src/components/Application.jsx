import React, { Component } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

import Posts from './Posts';

class Application extends Component {
  state = {
    posts: [],
  };

  unsuscribe = null;

  componentDidMount = async() => {
    this.unsuscribe = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    })
  }

  componentWillUnmount() {
    this.unsuscribe();
  }

  handleCreate = post => {
    firestore.collection('posts').add(post);
  };

  handleRemove = id => {
    firestore.doc(`/posts/${id}`).delete();
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} onCreate={this.handleCreate} onRemove={this.handleRemove}/>
      </main>
    );
  }
}

export default Application;
