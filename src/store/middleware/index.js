import { applyMiddleware } from 'redux';
import Buffer from 'src/store/middleware/Buffer';
import Saga from 'src/store/middleware/Saga';

const middlewares = [Buffer, Saga];

if (process.env.NODE_ENV === 'development') {
  const Logger = require('./Logger.js');
  middlewares.push(Logger);
}

const middleware = applyMiddleware(...middlewares);

export default middleware;
