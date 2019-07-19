import {
  APP_INSTALLED,
  type AppInstalled,
  APP_STATE_CHANGE,
  type StateUpdate,
} from 'src/actions/App';

type State = {
  +installed: boolean,
};

type Action = AppInstalled | StateUpdate;

const initialState: State = {
  installed: false,
  example: 'default',
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case APP_INSTALLED:
      return {
        ...state,
        installed: true,
      };

    case APP_STATE_CHANGE:
      return {
        ...state,
        example: action.example,
      };

    default:
      return state;
  }
};

export default reducer;
