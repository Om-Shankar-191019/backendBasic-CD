require('dotenv').config()
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

// db connection
mongoose.connect('mongodb://127.0.0.1:27017/bag');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bag');
  
 console.log("database connected!!")
}

//body parser

server.use(express.json());
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

//mvc

server.listen(process.env.PORT,()=>{
    console.log('listening at 3000')
});