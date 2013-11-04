Todos.Router.map(function(){
	this.resource('todos', { path: '/' }, function(){
		
	});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function(){
		this.store.find('todo');
	}
})