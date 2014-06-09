Amasing.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return data.categories;
    }
});

var data = {
    "status":"ok",
    "categories": [
        {
            "name":"Automotive"
        },
        {
            "name":"Baby & Children"
        },
        {
            "name":"Beauty & Health"
        },
        {
            "name":"Home & Garden"
        },
        {
            "name":"Kids & Toys"
        },
        {
            "name":"Clothing & Apparel"
        },
        {
            "name":"Books"
        },
        {
            "name":"Computers"
        },
        {
            "name":"Electronics"
        }
    ]
}
