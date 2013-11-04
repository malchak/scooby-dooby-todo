Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			var title = this.get('newTitle');
			if (!title.trim()) { return; }

			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false;
			});

			this.set(newTitle, '');

			todo.save();
		},
		clearCompleted: function() {
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},
	
	remaining: function(){
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function(){
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining'),

	hasCompleted: function() {
		retrun this.get('completed') > 0;
	}.property('completed'),

	completed: function(){
		retrun this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	allAreDone: function(key, value){
		retrun !!this.get('length') && this.everyBy('isCompleted', true);
	}.property('@each.isCompleted')

});