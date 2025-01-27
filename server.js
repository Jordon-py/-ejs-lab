const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

// ------------------------------------------------------ Restaurant Data
const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
};


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------------ ROUTES

// 1) Home Page
app.get('/', (req, res) => {
  res.render('home', {
    restaurant: RESTAURANT
  });
});

// 2) Full Menu
app.get('/menu', (req, res) => {
  res.render('menu', {
    restaurant: RESTAURANT,
    menuItems: RESTAURANT.menu
  });
});

// 3) Category Pages (e.g., /menu/mains, /menu/desserts, /menu/sides)
app.get('/menu/:category', (req, res) => {
  const catParam = req.params.category.toLowerCase(); 
  // Filter items matching the category in the URL
  const filteredItems = RESTAURANT.menu.filter(item => item.category === catParam);
  
  // Capitalize the category for display purposes
  const categoryTitle = catParam.charAt(0).toUpperCase() + catParam.slice(1);

  res.render('category', {
    restaurant: RESTAURANT,
    menuItems: filteredItems,
    category: categoryTitle
  });
});

// ------------------------------------ START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});