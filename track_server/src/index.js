require('./models/Users');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(authRoutes);

const mongoURI = 'mongodb+srv://jyoti:jyoti@348@cluster0-0tmqu.mongodb.net/test_u1?retryWrites=true&w=majority'

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
 }, 
//  ()=>{
//     console.log("mongoose connected!");
// }
);
mongoose.connection.on('connected', () => console.log("connected to mongo instance"));
mongoose.connection.on('error', err=> console.log("error connecting to mongo ", err));

app.get('/', (req, res)=> {
    res.send("you are on mac now");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('app is listening on port ', port));