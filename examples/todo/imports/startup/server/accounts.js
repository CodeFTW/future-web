import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Users } from '../../collections/UsersCollection';

Meteor.startup(function() {
  Accounts.loginServiceConfiguration.upsert(
    {
      service: 'facebook',
    },
    {
      $set: {
        appId: Meteor.settings.public.FACEBOOK_APP_ID,
        secret: Meteor.settings.FACEBOOK_SECRET_KEY,
      },
    }
  );
});

Accounts.onCreateUser((options, originalUser) => {
  const user = originalUser;
  if (options.profile) {
    user.name = options.profile.name;
  }
  user.disabled = false;

  if (user.emails && user.emails.length > 0) {
    user.email = user.emails[0].address;
  } else if (user.services && user.services.facebook) {
    if (user.services.facebook.email) {
      user.email = user.services.facebook.email;
    }
  }
  const userDb = Users.findOne({ email: user.email }, { limit: 1 });
  if (userDb) {
    console.error('Email já cadastrado');
    throw new Meteor.Error(403, 'Email já cadastrado');
  }

  return user;
});
