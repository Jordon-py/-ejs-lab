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


// ------------------------------------------------------ Set EJS as templating engine
app.set('view engine', 'ejs');

// ------------------------------------------------------ Serve static files (CSS, images, etc.) from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------------------------------ Parse incoming request data (if needed for forms, etc.)
// app.use(express.urlencoded({ extended: true }));

// ------------------------------------------------------ Routes
app.get('/', (req, res) => {
  // Home route
  res.render('home', {
    restaurant: RESTAURANT
  });
});

app.get('/menu', (req, res) => {
  // Menu route
  res.render('menu', {
    restaurant: RESTAURANT,
    menuItems: RESTAURANT.menu
  });
});

// ------------------------------------------------------ Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
