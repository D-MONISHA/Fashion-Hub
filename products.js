// ============================================================
// FASHION HUB - PRODUCT DATABASE
// 50 PRODUCTS
// ============================================================

const PRODUCTS = [

    // ========================================================
    // MEN - EXISTING PRODUCTS
    // ========================================================

    {
        id: 1,
        name: "Classic Oversized T-Shirt",
        category: "men",
        price: 29.99,
        oldPrice: 49.99,
        discount: 40,
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&auto=format",
        description: "Premium comfort meets style with our classic oversized t-shirt. Made from soft cotton with a relaxed fit.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Gray", "Navy", "Beige"]
    },

    {
        id: 2,
        name: "Premium Denim Jacket",
        category: "men",
        price: 89.99,
        oldPrice: 129.99,
        discount: 30,
        rating: 4.8,
        reviews: 256,
        image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&h=1000&fit=crop&auto=format",
        description: "A timeless denim jacket crafted from premium denim with a classic modern silhouette.",
        badge: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Dark Blue", "Light Blue", "Black"]
    },

    {
        id: 3,
        name: "Casual Cotton Shirt",
        category: "men",
        price: 39.99,
        oldPrice: 59.99,
        discount: 33,
        rating: 4.6,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1602810318383-fd83dc1933b6?w=800&h=1000&fit=crop&auto=format",
        description: "Versatile cotton shirt with a comfortable modern fit for casual and semi-formal occasions.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Blue", "Gray", "Pink", "Green"]
    },

    {
        id: 4,
        name: "Slim Fit Jeans",
        category: "men",
        price: 59.99,
        oldPrice: 89.99,
        discount: 33,
        rating: 4.7,
        reviews: 342,
        image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=800&h=1000&fit=crop&auto=format",
        description: "Stylish slim fit jeans with comfortable stretch and a contemporary tapered design.",
        badge: null,
        sizes: ["28", "29", "30", "31", "32", "33", "34", "36"],
        colors: ["Dark Blue", "Light Blue", "Black", "Gray"]
    },

    {
        id: 5,
        name: "Floral Summer Dress",
        category: "women",
        price: 49.99,
        oldPrice: 79.99,
        discount: 37,
        rating: 4.8,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1595777707802-221e218b649e?w=800&h=1000&fit=crop&auto=format",
        description: "Beautiful floral summer dress with lightweight fabric and a flattering silhouette.",
        badge: "NEW",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Floral Mix", "Pink", "Blue", "Green"]
    },

    {
        id: 6,
        name: "Women's Blazer",
        category: "women",
        price: 79.99,
        oldPrice: 119.99,
        discount: 33,
        rating: 4.9,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&h=1000&fit=crop&auto=format",
        description: "Professional and elegant blazer with structured shoulders and a tailored fit.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "White", "Burgundy"]
    },

    {
        id: 7,
        name: "Casual Sneakers",
        category: "footwear",
        price: 74.99,
        oldPrice: 109.99,
        discount: 31,
        rating: 4.7,
        reviews: 421,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop&auto=format",
        description: "Comfortable everyday sneakers with a cushioned sole and breathable upper.",
        badge: null,
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
        colors: ["White", "Black", "Gray", "Navy", "Red"]
    },

    {
        id: 8,
        name: "Leather Handbag",
        category: "accessories",
        price: 99.99,
        oldPrice: 159.99,
        discount: 37,
        rating: 4.8,
        reviews: 183,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=1000&fit=crop&auto=format",
        description: "Sophisticated leather handbag with multiple compartments and adjustable straps.",
        badge: null,
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Tan", "Burgundy"]
    },

    {
        id: 9,
        name: "Classic Watch",
        category: "accessories",
        price: 149.99,
        oldPrice: 249.99,
        discount: 40,
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=1000&fit=crop&auto=format",
        description: "Timeless classic watch with an elegant design suitable for every occasion.",
        badge: "NEW",
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Silver"]
    },

    {
        id: 10,
        name: "Running Shoes",
        category: "footwear",
        price: 94.99,
        oldPrice: 139.99,
        discount: 32,
        rating: 4.8,
        reviews: 289,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=1000&fit=crop&auto=format",
        description: "Lightweight running shoes with cushioning technology for active lifestyles.",
        badge: null,
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
        colors: ["Black/Red", "Blue/White", "Gray/White", "Purple/Pink"]
    },

    {
        id: 11,
        name: "Hoodie Sweatshirt",
        category: "men",
        price: 49.99,
        oldPrice: 79.99,
        discount: 37,
        rating: 4.7,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1556821552-5f07ebdc413f?w=800&h=1000&fit=crop&auto=format",
        description: "Cozy fleece hoodie with a relaxed fit and spacious kangaroo pocket.",
        badge: "NEW",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Gray", "Navy", "Olive", "Burgundy"]
    },

    {
        id: 12,
        name: "Classic Polo T-Shirt",
        category: "men",
        price: 34.99,
        oldPrice: 59.99,
        discount: 41,
        rating: 4.6,
        reviews: 167,
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=1000&fit=crop&auto=format",
        description: "Classic polo shirt with a smart collar and comfortable cotton construction.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Navy", "Red", "Green"]
    },

    {
        id: 13,
        name: "Formal Dress Shirt",
        category: "men",
        price: 44.99,
        oldPrice: 74.99,
        discount: 40,
        rating: 4.8,
        reviews: 201,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop&auto=format",
        description: "Elegant formal shirt made for business meetings and special occasions.",
        badge: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Light Blue", "Pink", "Gray"]
    },

    {
        id: 14,
        name: "Cargo Pants",
        category: "men",
        price: 54.99,
        oldPrice: 89.99,
        discount: 38,
        rating: 4.5,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&h=1000&fit=crop&auto=format",
        description: "Durable cargo pants with multiple utility pockets and a relaxed fit.",
        badge: null,
        sizes: ["28", "29", "30", "31", "32", "33", "34", "36"],
        colors: ["Khaki", "Black", "Olive", "Gray"]
    },

    {
        id: 15,
        name: "Sunglasses",
        category: "accessories",
        price: 89.99,
        oldPrice: 129.99,
        discount: 30,
        rating: 4.7,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=1000&fit=crop&auto=format",
        description: "Stylish sunglasses with UV protection and a comfortable premium frame.",
        badge: "NEW",
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Gold", "Silver"]
    },

    {
        id: 16,
        name: "Crossbody Bag",
        category: "accessories",
        price: 64.99,
        oldPrice: 99.99,
        discount: 35,
        rating: 4.6,
        reviews: 212,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&h=1000&fit=crop&auto=format",
        description: "Practical crossbody bag with an adjustable strap and secure compartments.",
        badge: null,
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Beige", "Navy"]
    },

    {
        id: 17,
        name: "Summer Top",
        category: "women",
        price: 34.99,
        oldPrice: 54.99,
        discount: 36,
        rating: 4.5,
        reviews: 176,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1000&fit=crop&auto=format",
        description: "Lightweight summer top designed for warm weather and everyday styling.",
        badge: "NEW",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Blue", "Yellow", "Pink", "Green"]
    },

    {
        id: 18,
        name: "Women's Jeans",
        category: "women",
        price: 64.99,
        oldPrice: 99.99,
        discount: 35,
        rating: 4.7,
        reviews: 298,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=1000&fit=crop&auto=format",
        description: "Trendy women's jeans with a comfortable stretch fit and classic styling.",
        badge: null,
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
        colors: ["Dark Blue", "Light Blue", "Black", "White"]
    },

    {
        id: 19,
        name: "Kids Casual Wear Set",
        category: "kids",
        price: 39.99,
        oldPrice: 64.99,
        discount: 38,
        rating: 4.6,
        reviews: 134,
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&h=1000&fit=crop&auto=format",
        description: "Comfortable kids casual wear set made for playtime and everyday activities.",
        badge: null,
        sizes: ["2Y", "3Y", "4Y", "5Y", "6Y", "7Y", "8Y"],
        colors: ["Blue/White", "Pink/White", "Green/White"]
    },

    {
        id: 20,
        name: "Premium Sneakers",
        category: "footwear",
        price: 119.99,
        oldPrice: 179.99,
        discount: 33,
        rating: 4.9,
        reviews: 367,
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=800&h=1000&fit=crop&auto=format",
        description: "Premium sneakers combining modern styling with superior comfort.",
        badge: "NEW",
        sizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
        colors: ["White/Black", "White/Red", "All White", "Black"]
    },

    {
        id: 21,
        name: "Wool Coat",
        category: "women",
        price: 129.99,
        oldPrice: 199.99,
        discount: 35,
        rating: 4.8,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=800&h=1000&fit=crop&auto=format",
        description: "Elegant wool coat with a tailored silhouette for cold-weather styling.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Camel", "Gray", "Navy"]
    },

    {
        id: 22,
        name: "Athletic Leggings",
        category: "women",
        price: 44.99,
        oldPrice: 74.99,
        discount: 40,
        rating: 4.7,
        reviews: 245,
        image: "https://images.unsplash.com/photo-1506629905607-d9f3b3f1e7b3?w=800&h=1000&fit=crop&auto=format",
        description: "High-waisted athletic leggings offering excellent support for workouts.",
        badge: "NEW",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Gray", "Olive"]
    },

    {
        id: 23,
        name: "Bucket Hat",
        category: "accessories",
        price: 24.99,
        oldPrice: 44.99,
        discount: 44,
        rating: 4.5,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&h=1000&fit=crop&auto=format",
        description: "Trendy bucket hat offering lightweight comfort and sun protection.",
        badge: null,
        sizes: ["One Size"],
        colors: ["Black", "White", "Beige", "Navy"]
    },

    {
        id: 24,
        name: "Canvas Backpack",
        category: "accessories",
        price: 54.99,
        oldPrice: 89.99,
        discount: 39,
        rating: 4.6,
        reviews: 167,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop&auto=format",
        description: "Durable canvas backpack with multiple compartments for everyday use.",
        badge: "NEW",
        sizes: ["One Size"],
        colors: ["Black", "Gray", "Olive", "Navy"]
    },


    // ========================================================
    // ADDITIONAL MEN'S COLLECTION
    // ========================================================

    {
        id: 25,
        name: "Linen Casual Shirt",
        category: "men",
        price: 42.99,
        oldPrice: 69.99,
        discount: 39,
        rating: 4.6,
        reviews: 154,
        image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800&h=1000&fit=crop&auto=format",
        description: "Breathable linen shirt designed for relaxed summer styling.",
        badge: "NEW",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Beige", "Sky Blue", "Olive"]
    },

    {
        id: 26,
        name: "Bomber Jacket",
        category: "men",
        price: 84.99,
        oldPrice: 129.99,
        discount: 35,
        rating: 4.7,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1000&fit=crop&auto=format",
        description: "Modern bomber jacket with a clean silhouette and versatile streetwear appeal.",
        badge: null,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Olive", "Navy", "Brown"]
    },

    {
        id: 27,
        name: "Leather Biker Jacket",
        category: "men",
        price: 139.99,
        oldPrice: 199.99,
        discount: 30,
        rating: 4.8,
        reviews: 231,
        image: "https://images.unsplash.com/photo-1520975958225-4c4b8f8e6a8f?w=800&h=1000&fit=crop&auto=format",
        description: "Bold leather biker jacket with a classic masculine silhouette.",
        badge: "TRENDING",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Brown"]
    },

    {
        id: 28,
        name: "Henley Long Sleeve",
        category: "men",
        price: 36.99,
        oldPrice: 54.99,
        discount: 33,
        rating: 4.5,
        reviews: 119,
        image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&h=1000&fit=crop&auto=format",
        description: "Comfortable long-sleeve henley with a timeless casual design.",
        badge: null,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Gray", "Olive"]
    },

    {
        id: 29,
        name: "Graphic Street T-Shirt",
        category: "men",
        price: 31.99,
        oldPrice: 49.99,
        discount: 36,
        rating: 4.6,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&auto=format",
        description: "Bold graphic t-shirt inspired by modern streetwear fashion.",
        badge: "NEW",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Gray"]
    },

    {
        id: 30,
        name: "Flannel Check Shirt",
        category: "men",
        price: 46.99,
        oldPrice: 69.99,
        discount: 33,
        rating: 4.7,
        reviews: 165,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&h=1000&fit=crop&auto=format",
        description: "Classic checked flannel shirt perfect for casual layering.",
        badge: null,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Green", "Blue", "Black"]
    },

    {
        id: 31,
        name: "Classic Chino Pants",
        category: "men",
        price: 52.99,
        oldPrice: 79.99,
        discount: 34,
        rating: 4.6,
        reviews: 187,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&auto=format",
        description: "Smart casual chino pants suitable for office and weekend outfits.",
        badge: null,
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["Khaki", "Navy", "Black", "Beige"]
    },

    {
        id: 32,
        name: "Relaxed Jogger Pants",
        category: "men",
        price: 39.99,
        oldPrice: 59.99,
        discount: 33,
        rating: 4.7,
        reviews: 205,
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&h=1000&fit=crop&auto=format",
        description: "Relaxed joggers combining comfort and contemporary street style.",
        badge: "NEW",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Navy", "Olive"]
    },

    {
        id: 33,
        name: "Classic Blazer",
        category: "men",
        price: 109.99,
        oldPrice: 159.99,
        discount: 31,
        rating: 4.9,
        reviews: 96,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1000&fit=crop&auto=format",
        description: "Sophisticated tailored blazer for formal events, meetings and celebrations.",
        badge: "PREMIUM",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Gray"]
    },

    {
        id: 34,
        name: "Textured Knit Sweater",
        category: "men",
        price: 57.99,
        oldPrice: 84.99,
        discount: 32,
        rating: 4.7,
        reviews: 132,
        image: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=800&h=1000&fit=crop&auto=format",
        description: "Warm textured knit sweater designed for elegant winter layering.",
        badge: null,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Cream", "Gray", "Brown", "Navy"]
    },


    // ========================================================
    // ADDITIONAL WOMEN'S COLLECTION
    // ========================================================

    {
        id: 35,
        name: "Elegant Maxi Dress",
        category: "women",
        price: 69.99,
        oldPrice: 109.99,
        discount: 36,
        rating: 4.8,
        reviews: 219,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop&auto=format",
        description: "Elegant flowing maxi dress designed for special occasions and evening outings.",
        badge: "NEW",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Red", "Blue", "Green"]
    },

    {
        id: 36,
        name: "Satin Evening Dress",
        category: "women",
        price: 84.99,
        oldPrice: 129.99,
        discount: 35,
        rating: 4.9,
        reviews: 176,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&h=1000&fit=crop&auto=format",
        description: "Luxurious satin evening dress with an elegant silhouette.",
        badge: "PREMIUM",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Emerald", "Burgundy", "Champagne"]
    },

    {
        id: 37,
        name: "Casual Midi Dress",
        category: "women",
        price: 54.99,
        oldPrice: 79.99,
        discount: 31,
        rating: 4.6,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&h=1000&fit=crop&auto=format",
        description: "Comfortable midi dress with a modern casual silhouette for everyday wear.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Blue", "White", "Black", "Beige"]
    },

    {
        id: 38,
        name: "Bodycon Party Dress",
        category: "women",
        price: 59.99,
        oldPrice: 89.99,
        discount: 33,
        rating: 4.7,
        reviews: 188,
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=1000&fit=crop&auto=format",
        description: "Stylish fitted party dress with a sleek contemporary design.",
        badge: "TRENDING",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Red", "Pink", "White"]
    },

    {
        id: 39,
        name: "Women's Cardigan",
        category: "women",
        price: 48.99,
        oldPrice: 69.99,
        discount: 30,
        rating: 4.6,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&h=1000&fit=crop&auto=format",
        description: "Soft cardigan designed for comfortable layering throughout the year.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Cream", "Gray", "Black", "Brown"]
    },

    {
        id: 40,
        name: "Crop Top",
        category: "women",
        price: 27.99,
        oldPrice: 44.99,
        discount: 38,
        rating: 4.5,
        reviews: 157,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1000&fit=crop&auto=format",
        description: "Modern cropped top designed for casual outfits and summer styling.",
        badge: "NEW",
        sizes: ["XS", "S", "M", "L"],
        colors: ["White", "Black", "Pink", "Blue"]
    },

    {
        id: 41,
        name: "Elegant Formal Blouse",
        category: "women",
        price: 43.99,
        oldPrice: 64.99,
        discount: 32,
        rating: 4.7,
        reviews: 141,
        image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&h=1000&fit=crop&auto=format",
        description: "Elegant blouse designed for professional and sophisticated outfits.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Cream", "Black", "Pink"]
    },

    {
        id: 42,
        name: "Women's Jumpsuit",
        category: "women",
        price: 74.99,
        oldPrice: 109.99,
        discount: 32,
        rating: 4.8,
        reviews: 164,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop&auto=format",
        description: "Contemporary jumpsuit combining comfort and effortless elegance.",
        badge: "NEW",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Navy", "Beige", "Green"]
    },

    {
        id: 43,
        name: "Pleated Midi Skirt",
        category: "women",
        price: 46.99,
        oldPrice: 69.99,
        discount: 33,
        rating: 4.6,
        reviews: 118,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=800&h=1000&fit=crop&auto=format",
        description: "Elegant pleated midi skirt that pairs beautifully with casual and formal tops.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Beige", "Pink", "Navy"]
    },

    {
        id: 44,
        name: "Wide Leg Trousers",
        category: "women",
        price: 55.99,
        oldPrice: 79.99,
        discount: 30,
        rating: 4.7,
        reviews: 136,
        image: "https://images.unsplash.com/photo-1506629905607-d9f3b3f1e7b3?w=800&h=1000&fit=crop&auto=format",
        description: "Modern wide-leg trousers with a comfortable high-waisted silhouette.",
        badge: "TRENDING",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Cream", "Gray", "Brown"]
    },

    {
        id: 45,
        name: "Women's Denim Jacket",
        category: "women",
        price: 72.99,
        oldPrice: 109.99,
        discount: 34,
        rating: 4.7,
        reviews: 172,
        image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&h=1000&fit=crop&auto=format",
        description: "Versatile women's denim jacket perfect for casual everyday outfits.",
        badge: null,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Light Blue", "Dark Blue", "Black"]
    },

    {
        id: 46,
        name: "Women's Hoodie",
        category: "women",
        price: 47.99,
        oldPrice: 69.99,
        discount: 31,
        rating: 4.6,
        reviews: 193,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop&auto=format",
        description: "Soft oversized hoodie designed for relaxed casual styling.",
        badge: "NEW",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Gray", "Black", "Cream", "Pink"]
    },


    // ========================================================
    // KIDS COLLECTION
    // ========================================================

    {
        id: 47,
        name: "Kids Denim Jacket",
        category: "kids",
        price: 42.99,
        oldPrice: 64.99,
        discount: 34,
        rating: 4.7,
        reviews: 96,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&h=1000&fit=crop&auto=format",
        description: "Cute and durable denim jacket designed for active kids.",
        badge: "NEW",
        sizes: ["3Y", "4Y", "5Y", "6Y", "7Y", "8Y"],
        colors: ["Blue", "Light Blue", "Black"]
    },

    {
        id: 48,
        name: "Kids Summer Dress",
        category: "kids",
        price: 36.99,
        oldPrice: 54.99,
        discount: 33,
        rating: 4.8,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&h=1000&fit=crop&auto=format",
        description: "Colorful summer dress made with soft and comfortable fabric for kids.",
        badge: "NEW",
        sizes: ["2Y", "3Y", "4Y", "5Y", "6Y"],
        colors: ["Pink", "Yellow", "Blue", "Floral"]
    },

    {
        id: 49,
        name: "Kids Casual Hoodie",
        category: "kids",
        price: 34.99,
        oldPrice: 49.99,
        discount: 30,
        rating: 4.6,
        reviews: 74,
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&h=1000&fit=crop&auto=format",
        description: "Warm and comfortable hoodie perfect for school, travel and playtime.",
        badge: null,
        sizes: ["3Y", "4Y", "5Y", "6Y", "7Y", "8Y"],
        colors: ["Blue", "Gray", "Pink", "Green"]
    },

    {
        id: 50,
        name: "Kids Polo T-Shirt",
        category: "kids",
        price: 27.99,
        oldPrice: 39.99,
        discount: 30,
        rating: 4.5,
        reviews: 82,
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&h=1000&fit=crop&auto=format",
        description: "Smart casual polo shirt designed for comfortable everyday wear.",
        badge: null,
        sizes: ["3Y", "4Y", "5Y", "6Y", "7Y"],
        colors: ["White", "Blue", "Red", "Green"]
    }
];


// ============================================================
// PRODUCT FUNCTIONS
// ============================================================


/**
 * Get all products
 */
function getAllProducts() {
    return PRODUCTS;
}


/**
 * Get a single product by ID
 */
function getProductById(id) {
    return PRODUCTS.find(
        product => product.id === parseInt(id)
    );
}


/**
 * Get products by category
 */
function getProductsByCategory(category) {

    if (category === "all") {
        return PRODUCTS;
    }

    return PRODUCTS.filter(
        product => product.category === category
    );
}


/**
 * Search products by name,
 * category or description
 */
function searchProducts(query) {

    const lowerQuery =
        query.toLowerCase().trim();

    if (!lowerQuery) {
        return PRODUCTS;
    }

    return PRODUCTS.filter(product =>

        product.name
            .toLowerCase()
            .includes(lowerQuery)

        ||

        product.category
            .toLowerCase()
            .includes(lowerQuery)

        ||

        product.description
            .toLowerCase()
            .includes(lowerQuery)

    );
}