import loginReducer from './reducers';
export { Types as LoginTypes, Creators as loginCreators } from './actions';
export { default as loginMiddleware } from './middleware';
export default loginReducer;
