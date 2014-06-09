Amasing.ProductRoute = Ember.Route.extend({
    model: function () {
        return data.details;
    }
});

var data = {
    "status":"ok",
    "details": {}
}
