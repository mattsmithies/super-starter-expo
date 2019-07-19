// const DELAY_SET_STATE = 1000;

const pushReceived = (context, notification) => {
  console.warn('Example - pushReceived');
  console.log(notification);

  context.setState({
    receivedPush: true,
  });

  // //ExampleDelaySetState
  // setTimeout(() => {
  //
  // }, DELAY_SET_STATE);
};

const notificationResponse = (context, notification) => {
  console.warn('Example - notificationResponse');
  console.log(notification);

  context.setState({
    receivedPush: true,
  });
};

const Example = (context, notification) => ({
  pushReceived: () => pushReceived(context, notification),
  notificationResponse: () => notificationResponse(context, notification),
});

export default Example;
