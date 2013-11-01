App.Router.map(function(){
	this.resource('todos', { path: '/' });
});

App.TodosRoute = Ember.Route.extend({
	model: function(){
		this.store.find('todo');
	}
})