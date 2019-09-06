import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import Application from './components/Application';
import PostsProvider from './Providers/PostsProvider';


render(
  <PostsProvider>
    <Application />
  </PostsProvider>
, document.getElementById('root'));
