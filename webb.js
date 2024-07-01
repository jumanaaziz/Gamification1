
const express= require("express")
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app=express()

//bring ejs template

app.set('view engine' , 'ejs')





//connectDB();
mongoose.connect('mongodb+srv://Jumana453:Yas123@cluster0.behhing.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0') .then(()=>{
    console.log('connected')
}).catch(()=>{
console.log('error connecting db')
})


//schema
const schema = new mongoose.Schema(
  {serviceName: String,
  description: String,
  imageUrl: String,
  companyLink: String}

);

const Create= mongoose.model('create', schema);

 

//bring body parser
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/index', (req,res)=>{
  const app= new Create(
    {serviceName, description, imageUrl, companyLink }= req.body);
     app.save().then(()=>res.redirect("/index"));
});





app.get('/index', async (req, res) => {

    try {
      const allservices = await Create.find({});
      res.render('../views/event/index', { allservices:allservices });
    } catch (error) {
      console.log(`There was an error: ${error}`);
      res.status(500).send("Error fetching services");
    }
  });






//bring static
app.use(express.static('public'))
app.use(express.static('node_modules'))




app.get('/', (req, res) => {
  res.render('../views/event/home');
});


app.get('/create', (req, res) => {
    res.render('../views/event/create');
  });




app.listen(3000,() => {
    console.log("web is working")
})




