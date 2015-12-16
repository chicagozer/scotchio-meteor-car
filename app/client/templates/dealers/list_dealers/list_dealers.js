/*****************************************************************************/
/* ListDealers: Event Handlers */
/*****************************************************************************/
Template.ListDealers.events({
});

/*****************************************************************************/
/* ListDealers: Helpers */
/*****************************************************************************/
Template.ListDealers.helpers({
  dealers: function() {
    return Dealers.find();
  }
});

Template.searchBox.events({
  "keyup #search-box": _.throttle(function(e) {
    var searchString = $(e.target).val().trim();
    DealerPages.set({
        filters:
{'$or' : [
  { 'DEALER_CODE':{'$regex':searchString} },
  { 'DEALER_NAME':{'$regex':searchString} }]
}
      });
  }, 200)
});

/*****************************************************************************/
/* ListDealers: Lifecycle Hooks */
/*****************************************************************************/
Template.ListDealers.created = function () {
};

Template.ListDealers.rendered = function () {
};

Template.ListDealers.destroyed = function () {
};

AutoForm.addHooks(null, {
  onSuccess: function(operation, result, template) {
    Router.go('dealersList');
  }
});
