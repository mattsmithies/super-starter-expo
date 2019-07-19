export const APP_INSTALLED = 'SuperStarterExpo/APP_INSTALLED';
export const APP_STATE_CHANGE = 'SuperStarterExpo/APP_STATE_CHANGE';
export const APP_EXAMPLE_REQUEST = 'SuperStarterExpo/APP_EXAMPLE_REQUEST';

export type AppInstalled = {
  type: APP_INSTALLED,
  onResult: Function,
};

export type StateUpdate = {
  type: APP_STATE_CHANGE,
  example: String,
};

export type ExampleRequest = {
  type: APP_EXAMPLE_REQUEST,
};

export const appInstalled = (onResult: Function): AppInstalled => ({
  type: APP_INSTALLED,
  onResult,
});

export const stateUpdate = (example: String): StateUpdate => ({
  type: APP_STATE_CHANGE,
  example,
});

export const exampleRequest = (): ExampleRequest => ({
  type: APP_EXAMPLE_REQUEST,
});
