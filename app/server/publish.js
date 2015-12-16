/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('dealers', function (/* args */) {
  return Dealers.find();
});
