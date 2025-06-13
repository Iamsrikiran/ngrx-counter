import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import { addPost, deletePost, updatePost } from './posts.actions';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    const updatePosts = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatePosts,
    };
  }),
  on(deletePost, (state: any, { id }) => {
    const updatePost = state.posts.filter((post: any) => {
      return post.id !== id;
    });
    return {
      ...state,
      posts: updatePost,
    };
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
