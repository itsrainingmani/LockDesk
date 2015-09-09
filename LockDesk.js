Desks = new Mongo.Collection("desks");

if (Meteor.isClient) {
  // counter starts at 0
  Template.body.helpers({
    desks: function () {
      return Desks.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
