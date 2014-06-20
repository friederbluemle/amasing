Amasing.IndexRoute = Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON('/scripts/api.php?method=getMock&file=index.json').then(function(data) {
            return data;
        });
    }
});
