var data = {
    "status":"ok",
    "products": [
        {
            "id": 1,
            "title": "Cleaning/Clean Home Synergy Blend",
            "description": "Garden bucket caddy featuring unique and clever design. Fits snugly on 5-gallon bucket. Sturdy canvas construction with deep pockets for various hand tools Includes cell phone, beverage, and seed packet holders 8.9-by-10-by- 13.4-inches at 2-pounds",
            "price": "$10.80"
        },
        {
            "id": 2,
            "title": "Fiskars Garden Bucket Caddy",
            "description": "Garden bucket caddy featuring unique and clever design. Fits snugly on 5-gallon bucket. Sturdy canvas construction with deep pockets for various hand tools Includes cell phone, beverage, and seed packet holders 8.9-by-10-by- 13.4-inches at 2-pounds",
            "price": "$10.80"
        },
        {
            "id": 3,
            "title": "Little Tikes Deluxe Home and Garden Playhouse",
            "description": "Garden bucket caddy featuring unique and clever design. Fits snugly on 5-gallon bucket. Sturdy canvas construction with deep pockets for various hand tools Includes cell phone, beverage, and seed packet holders 8.9-by-10-by- 13.4-inches at 2-pounds",
            "price": "$10.80"
        },
        {
            "id": 4,
            "title": "Foreside Home and Garden Metal Shasta",
            "description": "Garden bucket caddy featuring unique and clever design. Fits snugly on 5-gallon bucket. Sturdy canvas construction with deep pockets for various hand tools Includes cell phone, beverage, and seed packet holders 8.9-by-10-by- 13.4-inches at 2-pounds",
            "price": "$10.80"
        },
        {
            "id": 5,
            "title": "Miracle-Gro Aero Garden 7-Pod Indoor...",
            "description": "Garden bucket caddy featuring unique and clever design. Fits snugly on 5-gallon bucket. Sturdy canvas construction with deep pockets for various hand tools Includes cell phone, beverage, and seed packet holders 8.9-by-10-by- 13.4-inches at 2-pounds",
            "price": "$10.80"
        },
        {
            "id": 6,
            "title": "Allsop Home and Garden Solar  Bubble...",
            "description": "Garden bucket caddy featuring unique and clever design. Fits snugly on 5-gallon bucket. Sturdy canvas construction with deep pockets for various hand tools Includes cell phone, beverage, and seed packet holders 8.9-by-10-by- 13.4-inches at 2-pounds",
            "price": "$10.80"
        },
        {
            "id": 7,
            "title": "Chapin 20000 1-Gallon Lawn and Garden...",
            "description": "Garden bucket caddy featuring unique and clever design. Fits snugly on 5-gallon bucket. Sturdy canvas construction with deep pockets for various hand tools Includes cell phone, beverage, and seed packet holders 8.9-by-10-by- 13.4-inches at 2-pounds",
            "price": "$10.80"
        },
        {
            "id": 8,
            "title": "Sloggers Women's Rain and Garden Shoes...",
            "description": "Garden bucket caddy featuring unique and clever design. Fits snugly on 5-gallon bucket. Sturdy canvas construction with deep pockets for various hand tools Includes cell phone, beverage, and seed packet holders 8.9-by-10-by- 13.4-inches at 2-pounds",
            "price": "$10.80"
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "Automotive",
        },
        {
            "id": 2,
            "name": "Baby & Children",
        },
        {
            "id": 3,
            "name": "Beauty & Health",
        },
        {
            "id": 4,
            "name": "Home & Garden",
        },
        {
            "id": 5,
            "name": "Kids & Toys",
        },
        {
            "id": 6,
            "name": "Clothing & Apparel",
        },
        {
            "id": 7,
            "name": "Books",
        },
        {
            "id": 8,
            "name": "Computers",
        },
        {
            "id": 9,
            "name": "Electronics",
        }
    ]
};

Amasing.IndexRoute = Ember.Route.extend({
    model: function () {
        return data;
    }
});
