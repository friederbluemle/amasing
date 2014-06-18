Amasing.IndexRoute = Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON('http://amasing.highdog.me/scripts/api.php?method=getMock&file=index.json').then(function(data) {
            return data;
        });
    }
});
