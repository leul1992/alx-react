import * as notficationData from '../../dist/notifications.json';
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notficationData.default, [notification]);

export { normalizedData };

export const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  const output = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      output.push(messages[notifications[property].context]);
    }
  }

  return output;
}

const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);

  return normalizedData.entities;
};

export default notificationsNormalizer;