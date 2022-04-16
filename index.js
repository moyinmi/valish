const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


//import routes
const authRoute = require('./routes/auth'); 
const postRoute = require('./routes/post')

dotenv.config();
// connect to DB
mongoose.connect( 
    process.env.DB_CONNECT, // connects to the db uri in .env
    { useNewUrlParser:true},
    () => console.log('Connected to db!')
);

// middleware
app.use(express.json());

// routes middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)

app.listen(3000, () => 
                console.log('Server up and running'));