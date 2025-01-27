const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();




// ------------------------------------------------------Set EJS as templating engine
app.set('view engine', 'ejs');



//  ---------------------------------------------------- Serve static files (CSS, images, etc.) from "public" folder
app.use(express.static(path.join(__dirname, 'public')));



//  ---------------------------------------------------- Start the server
app.get('/', (req, res) => {
  res.render('home');
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
