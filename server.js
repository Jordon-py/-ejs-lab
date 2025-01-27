// ----------------------------------    IMPORTS AND CONSTANTS    ------------------------------------//
const express = require('express');
const PORT = 3000;
const app = express();

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
    // ...
  ]
};

/* ---------------------------------------------------  Root Route  ------------------------------------- */
app.get('/', (req, res) => {                        
  res.render('home', { restaurant: RESTAURANT });
});

/** -----------------------------------------  SERVER AND TEMPLATING ENGINE  ------------------ */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
