const express = require('express');
const path = require('path');
const PORT = 3000;
// Import route files
const homeRoutes = require('./routes/home');
const menuRoutes = require('./routes/menu');

const app = express();




// ------------------------------------------------------Set EJS as templating engine
app.set('view engine', 'ejs');



//  ---------------------------------------------------- Serve static files (CSS, images, etc.) from "public" folder
app.use(express.static(path.join(__dirname, 'public')));



//- ---------------------------------------------------- Use the routes
app.use('/', homeRoutes);
app.use('/menu', menuRoutes);



//  ---------------------------------------------------- Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
