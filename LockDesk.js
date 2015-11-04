Desks = new Mongo.Collection("desks");

if (Meteor.isClient) {
  Template.body.helpers({
    desks: function () {
      return Desks.find({});
    }
  });

  Template.desk.helpers({
    "click .btn-success": function () {
      Desks.update(this._id, {
        $set: {isOccupied: !this.isOccupied}
      })
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
