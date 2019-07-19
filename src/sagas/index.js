import { all, fork } from 'redux-saga/effects';
import RequestExample from 'src/sagas/RequestExample';

const rootSaga = function* () {
  yield all([fork(RequestExample)]);
};

export default rootSaga;
