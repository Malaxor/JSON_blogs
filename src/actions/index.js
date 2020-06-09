import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
   const { data } = await jsonPlaceholder.get('/posts');
   dispatch({ type: 'FETCH_POSTS', payload: data });
}
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// only fetching the user one time with memoize function
const _fetchUser = _.memoize(async (id, dispatch) => {
   const { data } = await jsonPlaceholder.get(`/users/${id}`);
   dispatch({ type: 'FETCH_USER', payload: data });
});