/**
 * an express app that
 * 1.connects to a db
 * 2.creates the payload{message: String, data : object}
 * no 2 means we are to return an obj that tells the client if the req is successful or not conatined in the message
 * and the data should contain the result 
 * 
 * if there is an error, the response should return the error instead
 * 
 * 3. gets the data created
 * 4. updates the data created 
 * 5. deletes the data created  
 */

//  {
    // name : "Gerald aka JAyyphire",
    // email : "geraldlouisugwunna@gmail.com",
    // country: "Nigeria"
// }

const express = require('express');
const connectDB = require('./db');
require('dotenv').config();
const { PORT } = process.env
const fs = require('fs')
const path = require('path')

connectDB();

const app = express()

app.use(express.json({extended:false}))

app.get('/', (req, res)=>{
    return res.json({
        message : 'Sucessful, Here are your details',
        data : fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, json)=>{
            if (err) throw err;

            return json
        })
    })
})

const port = process.env.PORT || PORT

app.listen(port, ()=>{
    console.log('server is running')
})

app.get('/data')