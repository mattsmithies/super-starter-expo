import { persistCombineReducers } from 'redux-persist';
import { ENV, STORAGE_PREFIX } from 'src/config';
import storage from 'redux-persist/src/storage';
import App from 'src/reducers/App';

const config = {
  key: STORAGE_PREFIX || 'Sandbox',
  debug: ENV === 'development',
  storage,
};

const reducers = persistCombineReducers(config, {
  app: App,
});

export default reducers;
