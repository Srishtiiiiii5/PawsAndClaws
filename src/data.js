// const productsData=[
//     {
//         Animal_type:'Dog',
//         Product_type: 'Accesories', 
//         Product_name:'Indian Jersey Print',
//         image_url: '',
//         Price: 1000,
//         Rating: 4,
//         Reviews: [
//             {
//                 Name:'',
//                 comment:'',
//                 rating:3
//             }
//         ],
//     }
// ]

const productsData = [
    // Dog Accessories
    { Animal_type: 'Dog', 
        Product_type: 'Accessories', 
        Product_name: 'Indian Jersey Print', 
        image_url: '../Assets/AccessoriesA1', 
        Price: 1000, 
        Rating: 4, 
        Reviews: [{ Name: 'John', comment: 'Good quality.', rating: 4 }] },
    { Animal_type: 'Dog', Product_type: 'Accessories', Product_name: 'Leash and Collar Set', image_url: '../Assets/AccessoriesA2', Price: 1200, Rating: 5, Reviews: [{ Name: 'Sarah', comment: 'Very sturdy.', rating: 5 }] },
    { Animal_type: 'Dog', Product_type: 'Accessories', Product_name: 'Dog Backpack', image_url: '../Assets/AccessoriesA3', Price: 1500, Rating: 3, Reviews: [{ Name: 'Mike', comment: 'Useful but pricey.', rating: 3 }] },
    
    // Dog Bowls and Feeders
    { Animal_type: 'Dog', Product_type: 'Bowls and Feeders', Product_name: 'Banana Bowl', image_url: '../Assets/BowlsAndFeedersA1.png', Price: 500, Rating: 4, Reviews: [{ Name: 'Anna', comment: 'Easy to clean.', rating: 4 }] },
    { Animal_type: 'Dog', Product_type: 'Bowls and Feeders', Product_name: 'Fun Feeder-Slo bowl', image_url: '../Assets/BowlsAndFeedersA2.png', Price: 2500, Rating: 5, Reviews: [{ Name: 'David', comment: 'Great for busy owners.', rating: 5 }] },
    { Animal_type: 'Dog', Product_type: 'Bowls and Feeders', Product_name: 'Slow Feeder Bowl', image_url: '../Assets/BowlsAndFeedersA3.png', Price: 700, Rating: 4, Reviews: [{ Name: 'Lisa', comment: 'Helps prevent overeating.', rating: 4 }] },
    
    // Dog Grooming
    { Animal_type: 'Dog', Product_type: 'Grooming', Product_name: 'Abk Andis Pin Brush', image_url: '../Assets/GroomingA1.png', Price: 300, Rating: 4, Reviews: [{ Name: 'Kate', comment: 'Removes hair easily.', rating: 4 }] },
    { Animal_type: 'Dog', Product_type: 'Grooming', Product_name: 'Abk Flexible Rake Comb', image_url: '../Assets/GroomingA2.png', Price: 800, Rating: 5, Reviews: [{ Name: 'Jack', comment: 'Smells great.', rating: 5 }] },
    { Animal_type: 'Dog', Product_type: 'Grooming', Product_name: 'Nail Clippers', image_url: '../Assets/GroomingA3.png', Price: 200, Rating: 3, Reviews: [{ Name: 'Sophia', comment: 'A bit dull.', rating: 3 }] },
    
    // Dog Supplements
    { Animal_type: 'Dog', Product_type: 'Supplements', Product_name: 'Curumine with Piperine', image_url: '../Assets/SupplementsA1.png', Price: 1800, Rating: 5, Reviews: [{ Name: 'Nick', comment: 'Helped my senior dog.', rating: 5 }] },
    { Animal_type: 'Dog', Product_type: 'Supplements', Product_name: 'Jolly Good pet hip', image_url: '../Assets/SupplementsA2.png', Price: 1200, Rating: 4, Reviews: [{ Name: 'Rachel', comment: 'Good for overall health.', rating: 4 }] },
    { Animal_type: 'Dog', Product_type: 'Supplements', Product_name: 'Jolly Good pet anxiety syrup', image_url: '../Assets/SupplementsA3.png', Price: 1000, Rating: 5, Reviews: [{ Name: 'Oliver', comment: 'Improved digestion.', rating: 5 }] },
    
    // Dog Treats
    { Animal_type: 'Dog', Product_type: 'Treats', Product_name: 'Chewy Small Bars', image_url: '../Assets/TreatsA1.png', Price: 300, Rating: 5, Reviews: [{ Name: 'Ella', comment: 'My dog loves these.', rating: 5 }] },
    { Animal_type: 'Dog', Product_type: 'Treats', Product_name: 'Chew Chop Chickens', image_url: '../Assets/TreatsA2.png', Price: 400, Rating: 4, Reviews: [{ Name: 'Ethan', comment: 'Tasty and healthy.', rating: 4 }] },
    { Animal_type: 'Dog', Product_type: 'Treats', Product_name: 'Dental Chips chicken and cranberry flavour', image_url: '../Assets/TreatsA3.png', Price: 350, Rating: 4, Reviews: [{ Name: 'Zoe', comment: 'Keeps teeth clean.', rating: 4 }] },
    
    // Dog Clothing
    { Animal_type: 'Dog', Product_type: 'Clothing', Product_name: 'Jersey', image_url: '../Assets/ClothingA1.png', Price: 900, Rating: 4, Reviews: [{ Name: 'Ben', comment: 'Waterproof and durable.', rating: 4 }] },
    { Animal_type: 'Dog', Product_type: 'Clothing', Product_name: 'Jacket', image_url: '../Assets/ClothingA2.png', Price: 1200, Rating: 5, Reviews: [{ Name: 'Amelia', comment: 'Warm and cozy.', rating: 5 }] },
    { Animal_type: 'Dog', Product_type: 'Clothing', Product_name: 'Sleevless Tshirt', image_url: '../Assets/ClothingA3.png', Price: 700, Rating: 3, Reviews: [{ Name: 'Liam', comment: 'A bit hard to put on.', rating: 3 }] },

    // Cat Accessories
    { Animal_type: 'Cat', Product_type: 'Accessories', Product_name: 'Cat Harness', image_url: '../Assets/AccessoriesB1', Price: 800, Rating: 4, Reviews: [{ Name: 'Grace', comment: 'Comfortable fit.', rating: 4 }] },
    { Animal_type: 'Cat', Product_type: 'Accessories', Product_name: 'Scratching Post', image_url: '../Assets/AccessoriesB2', Price: 1500, Rating: 5, Reviews: [{ Name: 'Henry', comment: 'Great for scratching.', rating: 5 }] },
    { Animal_type: 'Cat', Product_type: 'Accessories', Product_name: 'Cat Carrier', image_url: '../Assets/AccessoriesB3', Price: 2000, Rating: 4, Reviews: [{ Name: 'Eva', comment: 'Spacious and sturdy.', rating: 4 }] },

    // Cat Bowls and Feeders
    { Animal_type: 'Cat', Product_type: 'Bowls and Feeders', Product_name: 'Ceramic Bowl', image_url: '', Price: 600, Rating: 5, Reviews: [{ Name: 'Sam', comment: 'Stylish and functional.', rating: 5 }] },
    { Animal_type: 'Cat', Product_type: 'Bowls and Feeders', Product_name: 'Elevated Feeder', image_url: '', Price: 1300, Rating: 4, Reviews: [{ Name: 'James', comment: 'Perfect height for my cat.', rating: 4 }] },
    { Animal_type: 'Cat', Product_type: 'Bowls and Feeders', Product_name: 'Water Fountain', image_url: '', Price: 2000, Rating: 5, Reviews: [{ Name: 'Lily', comment: 'Encourages my cat to drink more.', rating: 5 }] },

    // Cat Grooming
    { Animal_type: 'Cat', Product_type: 'Grooming', Product_name: 'Cat Comb', image_url: '', Price: 300, Rating: 4, Reviews: [{ Name: 'Leo', comment: 'Removes loose fur.', rating: 4 }] },
    { Animal_type: 'Cat', Product_type: 'Grooming', Product_name: 'Fur Detangler', image_url: '', Price: 1000, Rating: 5, Reviews: [{ Name: 'Sophia', comment: 'Helps with mats.', rating: 5 }] },
    { Animal_type: 'Cat', Product_type: 'Grooming', Product_name: 'Cat Nail Trimmer', image_url: '', Price: 250, Rating: 4, Reviews: [{ Name: 'Mia', comment: 'Easy to use.', rating: 4 }] },

    // Cat Supplements
    { Animal_type: 'Cat', Product_type: 'Supplements', Product_name: 'Hairball Remedy', image_url: '', Price: 1200, Rating: 5, Reviews: [{ Name: 'Daniel', comment: 'Reduces hairballs.', rating: 5 }] },
    { Animal_type: 'Cat', Product_type: 'Supplements', Product_name: 'Omega-3', image_url: '', Price: 1500, Rating: 4, Reviews: [{ Name: 'Grace', comment: 'Helps with coat.', rating: 4 }] },
    { Animal_type: 'Cat', Product_type: 'Supplements', Product_name: 'Vitamin Paste', image_url: '', Price: 800, Rating: 4, Reviews: [{ Name: 'Jack', comment: 'Boosts energy.', rating: 4 }] },

    // Cat Treats
    { Animal_type: 'Cat', Product_type: 'Treats', Product_name: 'Catnip Treats', image_url: '', Price: 300, Rating: 5, Reviews: [{ Name: 'Ella', comment: 'My cat loves them.', rating: 5 }] },
    { Animal_type: 'Cat', Product_type: 'Treats', Product_name: 'Chicken Bites', image_url: '', Price: 400, Rating: 4, Reviews: [{ Name: 'Ethan', comment: 'Tasty and nutritious.', rating: 4 }] },
    { Animal_type: 'Cat', Product_type: 'Treats', Product_name: 'Dental Treats', image_url: '', Price: 350, Rating: 4, Reviews: [{ Name: 'Zoe', comment: 'Good for teeth.', rating: 4 }] },
    // Cat Clothing
{ Animal_type: 'Cat', Product_type: 'Clothing', Product_name: 'Cat Sweater', image_url: '', Price: 900, Rating: 5, Reviews: [{ Name: 'Ben', comment: 'Keeps my cat warm.', rating: 5 }] },
{ Animal_type: 'Cat', Product_type: 'Clothing', Product_name: 'Cat Scarf', image_url: '', Price: 500, Rating: 4, Reviews: [{ Name: 'Amelia', comment: 'Stylish accessory.', rating: 4 }] },
{ Animal_type: 'Cat', Product_type: 'Clothing', Product_name: 'Cat Hoodie', image_url: '', Price: 1200, Rating: 4, Reviews: [{ Name: 'Liam', comment: 'Very cute.', rating: 4 }] }
    ]