import * as notfication from '../../../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
    return notfication.default.filter((notfi) => notfi.author.id === userId).map((notfi) => notfi.context);
  }