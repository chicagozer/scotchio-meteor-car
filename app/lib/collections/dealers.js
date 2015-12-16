Dealers = new Mongo.Collection('dealers');

Dealers.attachSchema(new SimpleSchema({
  DEALER_CODE: {
    type: String,
    label: "Code",
    max: 128
  },
  DEALER_NAME: {
    type: String,
    label: "Name",
    max: 128
  },
  AGENT_TYPE: {
    type: String,
    label: "Agent Type",
    allowedValues: ['ACX','PBS','ACX2','RCX','AUTOMATE','Xtime','ARKONA','INX','SERTI','SERTI2','UNKNOWN','INTEGRALINK','XIS','NONE','SELECTQU','OTHER','ASOFT','VINPLUS','DBLT'],
  },
  SCHEMA_NAME: {
    type: String,
    label: "Schema",
    allowedValues: ['X8','X9','AUTO','ELEAD','X11','AN','DCXSERVICE','X5','X12','X10','X6','X7'],
  }
}));

if (Meteor.isServer) {
  Dealers.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
