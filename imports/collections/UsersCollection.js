import { Meteor } from 'meteor/meteor';

const users = Meteor.users;

Object.assign(users, {});

export { users as Users };
