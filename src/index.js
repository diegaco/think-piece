import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import Application from './components/Application';
import PostsProvider from './Providers/PostsProvider';
import UserProvider from './Providers/UserProvider';


render(
  <UserProvider>
    <PostsProvider>
      <Application />
    </PostsProvider>
  </UserProvider>
, document.getElementById('root'));
