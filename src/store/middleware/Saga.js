import createSagaMiddleware from 'redux-saga';
import RootSaga from 'src/sagas';

const sagaMiddleware = createSagaMiddleware();

const runSagaMiddleware = () => {
  sagaMiddleware.run(RootSaga);
};

export default sagaMiddleware;

export { runSagaMiddleware };
