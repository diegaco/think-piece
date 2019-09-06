import React, { Component } from 'react';
import { firestore , auth, createUserProfileDocument} from '../firebase';
import { collectIdsAndDocs } from '../utilities';
import Authentication from './Authentication';

import Posts from './Posts';

class Application extends Component {
  state = {
    user: null,
  };

  unsuscribeFromAuth = null;

  componentDidMount = async() => {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth)
      console.log(user);
      this.setState({ user })
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    const { user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user} />
        <Posts />
      </main>
    );
  }
}

export default Application;
