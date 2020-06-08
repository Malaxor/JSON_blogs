import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
   const { data } = await jsonPlaceholder.get('/posts');
   dispatch({ type: 'FETCH_POSTS', payload: data });
}
export default fetchPosts;