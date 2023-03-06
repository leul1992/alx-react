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
    return notficationData.filter((notfi) => notfi.author.id === userId).map((notfi) => notfi.context);
  }

export {normalized};