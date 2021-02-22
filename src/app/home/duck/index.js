import homeReducer from './reducers';
export { Types as HomeTypes, Creators as homeCreators } from './actions';
export { default as homeMiddleware } from './middleware';
export default homeReducer;
