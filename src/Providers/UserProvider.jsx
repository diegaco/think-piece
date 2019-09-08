import React, {Component, createContext } from 'react';
import { firestore , auth, createUserProfileDocument} from '../firebase';

export const UserContext = createContext();

class UserProvider extends Component {
  state = {
    user: null,
  };

  unsuscribeFromAuth = null;

  componentDidMount = async() => {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth)
      this.setState({ user })
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }


  render() {
    const { user } = this.state;
    const { children } = this.props;

    return (
      <UserContext.Provider value={user}>
        { children }
      </UserContext.Provider>
    );
  }
}

export default UserProvider;