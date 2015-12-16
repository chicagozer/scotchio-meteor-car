Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('/dealer/create', {
  name: 'createDealer',
  controller: 'DealersController',
  action: 'create',
  where: 'client'
});


Router.route('/dealers', {
  name: 'dealersList',
  controller: 'DealersController',
  action: 'list',
  where: 'client'
});

Router.route('/dealer/:_id', {
  name: 'editDealer',
  controller: 'DealersController',
  action: 'edit',
  where: 'client'
});
