const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require('./src/config/db');

require('dotenv').config();

const app = express();

//Connect to the Database
connectDb();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.use('api/events', require('./src/routes/eventRoutes'))
app.use('api/bookings', require('./src/routes/bookingRoutes'))
app.use('api/auth', require('./src/routes/authRoutes'))

const port = process.env.PORT || 4000;

app.listen(port, ()=> {
    console.log(`Server is listening on the port ${port}`);
})