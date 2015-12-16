DealersController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('dealers');
  },
  data: function () {
    return Dealers.findOne({_id:  new Meteor.Collection.ObjectID(this.params._id)});
  },
  create: function() {
    this.render('CreateDealer', {});
  },
  list: function() {
    this.render('ListDealers', {});
  },
  edit: function() {
    this.render('EditDealer', {});
  }
});

DealerPages = new Meteor.Pagination(Dealers, {
	router: "iron-router",
	routerLayout: "MasterLayout",
	route: "/dealers/",
	homeRoute: "/dealers/",
	routerTemplate: "ListDealers",
	templateName: "ListDealers",
	itemTemplate: "DealerItem",
	divWrapper: false,
	sort: {
		DEALER_NAME: 1
	},
	perPage: 10,
	availableSettings: {filters: true}
	});
