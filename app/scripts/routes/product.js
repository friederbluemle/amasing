var data = {
    "status":"ok",
    "details": {}
};

Amasing.ProductRoute = Ember.Route.extend({
    model: function () {
        return data.details;
    }
});
