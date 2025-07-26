const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// middleware Start_________________________________
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.json());

// app.use('/logo', express.static(path.join(__dirname, 'controlar/v1/ThriveGlobalForum/views')));


// DB Import & MongoDB Connected______________________________________________________
const dbConnection = require('./utilities/dbConnect');
dbConnection.connectToServer();
//Braintree Connect 
const braintreeConnection = require('./utilities/braintreeConnect');       
braintreeConnection.connectToBraintree();

// ThriveGlobalForum API routes ___________________________________________________________________
const ThriveGlobalForum = require('./routes/v1/ThriveGlobalForum/makePayment.route');

app.use('/api/v1/ThriveGlobalForum', ThriveGlobalForum);



// ✅ Railway health check route
app.get("/", (req, res) => {
    res.send("✅ ThriveGlobalForum API is live");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// 4000000000001091	