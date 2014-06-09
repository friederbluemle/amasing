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
            "id": 1,
            "name": "Automotive",
            "subcategories": [
                "Sub Category Name One",
                "Sub Category Name Two",
                "Sub Category Name Three",
                "Sub Category Name Four",
                "Sub Category Name Five",
                "Sub Category Name Six",
                "Sub Category Name Seven"
            ]
        },
        {
            "id": 2,
            "name": "Baby & Children",
            "subcategories": [
                "Sub Category Name One",
                "Sub Category Name Two",
                "Sub Category Name Three",
                "Sub Category Name Four",
                "Sub Category Name Five",
                "Sub Category Name Six",
                "Sub Category Name Seven"
            ]
        },
        {
            "id": 3,
            "name": "Beauty & Health",
            "subcategories": [
                "Sub Category Name One",
                "Sub Category Name Two",
                "Sub Category Name Three",
                "Sub Category Name Four",
                "Sub Category Name Five",
                "Sub Category Name Six",
                "Sub Category Name Seven"
            ]
        },
        {
            "id": 4,
            "name": "Home & Garden",
            "subcategories": [
                "Sub Category Name One",
                "Sub Category Name Two",
                "Sub Category Name Three",
                "Sub Category Name Four",
                "Sub Category Name Five",
                "Sub Category Name Six",
                "Sub Category Name Seven"
            ]
        },
        {
            "id": 5,
            "name": "Kids & Toys",
            "subcategories": [
                "Sub Category Name One",
                "Sub Category Name Two",
                "Sub Category Name Three",
                "Sub Category Name Four",
                "Sub Category Name Five",
                "Sub Category Name Six",
                "Sub Category Name Seven"
            ]
        },
        {
            "id": 6,
            "name": "Clothing & Apparel",
            "subcategories": [
                "Sub Category Name One",
                "Sub Category Name Two",
                "Sub Category Name Three",
                "Sub Category Name Four",
                "Sub Category Name Five",
                "Sub Category Name Six",
                "Sub Category Name Seven"
            ]
        },
        {
            "id": 7,
            "name": "Books",
            "subcategories": [
                "Sub Category Name One",
                "Sub Category Name Two",
                "Sub Category Name Three",
                "Sub Category Name Four",
                "Sub Category Name Five",
                "Sub Category Name Six",
                "Sub Category Name Seven"
            ]
        },
        {
            "id": 8,
            "name": "Computers",
            "subcategories": [
                "Sub Category Name One",
                "Sub Category Name Two",
                "Sub Category Name Three",
                "Sub Category Name Four",
                "Sub Category Name Five",
                "Sub Category Name Six",
                "Sub Category Name Seven"
            ]
        },
        {
            "id": 9,
            "name": "Electronics",
            "subcategories": [
                "Sub Category Name One",
                "Sub Category Name Two",
                "Sub Category Name Three",
                "Sub Category Name Four",
                "Sub Category Name Five",
                "Sub Category Name Six",
                "Sub Category Name Seven"
            ]
        }
    ]
}
