import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import Reducers from 'src/reducers';
import Middleware from 'src/store/middleware';

export const store = createStore(Reducers, compose(Middleware));
export const persistor = persistStore(store);
