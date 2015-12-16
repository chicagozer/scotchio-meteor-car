/*****************************************************************************/
/* EditDealer: Event Handlers */
/*****************************************************************************/
Template.EditDealer.events({
});

/*****************************************************************************/
/* EditDealer: Helpers */
/*****************************************************************************/
Template.EditDealer.helpers({
  beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete dealer: "' + doc.brand + " " + doc.model + '"?')) {
          this.remove();
          Router.go('dealersList');
        }
      };
    }
});

/*****************************************************************************/
/* EditDealer: Lifecycle Hooks */
/*****************************************************************************/
Template.EditDealer.created = function () {
};

Template.EditDealer.rendered = function () {
};

Template.EditDealer.destroyed = function () {
};
