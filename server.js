//  ----------------------------------    IMPORTS AND CONSTANTS    ------------------------------------//

import { locals, name } from 'ejs';
import express from 'express';
import { Schema, model } from 'mongoose';

const express = require('express');
const app = express();
app.use(express.json());            // parse incoming JSON
require('dotenv').config();       // connect to DB
require('./config/database');

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




/*  -----------------------------------------   INITIALIZE 'APPLICATION' SCHEMA & EMBED IT INTO 'USER' SCHEMA   ----------------------  */

const applicationSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  postingLink: {
    type: String,
  },
  status: {
    type: String,
    enum: ['interested', 'applied', 'interviewing', 'rejected', 'accepted'],
    default: 'interested'
  },
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [applicationSchema] // Embedding here
});

export default model('User', userSchema);
console.log(`check if embedding worked , ${userSchema}`)




/* ---------------------------------------------------  Root Route  ------------------------------------- */
app.set('view engine', 'ejs');

app.get('/', (req, res) => {    // ROOT URL
  res.send('Hello World!')
})


/** -----------------------------------------  SERVER AND TEMPLATING ENGINE  ------------------ */
require('dotenv').config();
import './config/database'; // triggers the connection code



app.listen(port, () => {
  console.log(`server running on ${port}`)
});