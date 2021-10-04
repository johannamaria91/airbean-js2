//backendkoden 
const express = require('express'); 
const app = express(); 
const cors = require('cors');
const PORT = 8080
const { Router } = require('express');
const router = new Router();
const fs = require('fs');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use('/api/items', router);


app.listen (PORT, (err) => {
 if (err) throw err;
    console.log('server is running on localhost:8080') 
});


router.get('/', (req, res) => {
    const items = fs.createReadStream('./api/items.json')
    items.pipe(res)
 });



//till slut ligger vårt api här 