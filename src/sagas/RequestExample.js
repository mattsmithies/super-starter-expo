import { call, put, takeEvery } from 'redux-saga/effects';
import API from 'src/services/API';
import ActionCreator from 'src/actions';

const makeExampleRequest = function* (action: Object) {
  // const { onSuccess, onError } = action;

  try {
    const url = 'https://reqres.in/api/users';
    const result = yield call(API.get, url);

    console.log(action);
    console.log(result);

    // Saving the result in state...
    // yield put({ type: 'REQUEST_EXAMPLE_SUCCESS', result });
  } catch (error) {
    if (error.response) {
      yield put({ type: 'REQUEST_EXAMPLE_ERROR', error });
    } else {
      yield put({ type: 'REQUEST_EXAMPLE_ERROR', error: 'Network error' });
    }
  }

  // action.onResult();
};

const watchRequestExample = function* () {
  yield takeEvery(ActionCreator.exampleRequest, makeExampleRequest);
};

export default watchRequestExample;
