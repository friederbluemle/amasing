Amasing.ProductRoute = Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON('http://amasing.highdog.me/scripts/api.php?method=getMock&file=product.json').then(function(data) {
            return data;
        });
    }
});
