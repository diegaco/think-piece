import React, { useContext } from 'react'
import Post from './Post';
import AddPost from './AddPost';
import { PostsContext } from '../Providers/PostsProvider';

const Posts = () => {
  const posts = useContext(PostsContext);// hooks

  // without hooks
  // return (
  //   <PostsContext.Consumer>
  //     {
  //       posts => {
  //         return posts.map(post => <Post {...post} key={post.id} />)
  //       }
  //     }
  //   </PostsContext.Consumer>
  // )

  return (
    <section className="Posts">
      <AddPost />
      { posts.map(post => <Post {...post} key={post.id} />) }
    </section>
  )
}

export default Posts;
