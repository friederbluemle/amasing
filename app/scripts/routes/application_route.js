Amasing.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return Ember.$.getJSON('/scripts/api.php?method=getMock&file=application_route.json').then(function(data) {
            return data;
        });
    }
});
