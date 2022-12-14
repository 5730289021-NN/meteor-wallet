import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../imports/api/ContactsCollection'
// import '../imports/api/ContactsCollection'

Meteor.startup(async () => {
  ContactsCollection.remove({})

});
