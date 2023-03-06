import * as notficationData from '../../../../notifications.json';
import { normalize, schema } from "normalizr";



const user = new schema.Entity('users');

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
  );
  
  const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
  });

const normalized = normalize(notficationData.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
  const output = [];
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      output.push(messages[notifications[id].context]);
    }
  }

  return output;
}


export {normalized};