import Actions from 'src/Notification/Actions';

const NotificationType = {
  PushReceived: 'push_received',
  NotificationResponse: 'notification_response',
  Register: 'register',
};

const PushManager = {};

const getNotificationFromType = (type, response) => {
  if (type === NotificationType.PushReceived) {
    return {
      reference: response.extras.action,
      notification: response,
    };
  }

  return {
    reference: response.notification.extras.action,
    notification: response.notification,
  };
};

PushManager.bindToContext = (context: Object) => {
  const processAction = (type, response) => {
    const { reference, notification } = getNotificationFromType(type, response);
    const action = Actions(context)[reference];

    if (action) {
      action(notification)[type]();
    } else {
      console.warn(`${reference} not found`);
    }
  };

  return processAction;
};

PushManager.enableNotifications = () => {};

PushManager.subscribe = (tag: String) => {
  console.log(tag);
};

PushManager.unsubscribe = () => {};

export default PushManager;
