Amasing.ProductRoute = Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON('/scripts/api.php?method=getMock&file=product.json').then(function(data) {
            return data;
        });
    }
});
