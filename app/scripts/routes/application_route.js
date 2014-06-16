var data = {
    "status":"ok",
    "cart_size": 3,
    "cart_items": [
        {
            "id": 1,
            "name": "Cleaning/Clean Home Synergy Blend",
            "image": "sm-img.png",
            "weight": "12 Ibs",
            "quantity": "12",
            "price": "$10.80"
        },
        {
            "id": 2,
            "name": "Fiskars Garden Bucket Caddy",
            "image": "sm-img.png",
            "weight": "12 Ibs",
            "quantity": "12",
            "price": "$10.80"
        },
        {
            "id": 3,
            "name": "Little Tikes Deluxe Home and Garden Playhouse",
            "image": "sm-img.png",
            "weight": "12 Ibs",
            "quantity": "12",
            "price": "$10.80"
        }
    ],
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
};

Amasing.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return data;
    }
});
