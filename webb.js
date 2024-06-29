
const express= require("express")
const mongoose = require('mongoose');

const app=express()
//const connectDB = require('./config/database');

const bodyParser=require('body-parser')

//bring body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



//connectDB();
mongoose.connect('mongodb+srv://Jumana453:Yas123@cluster0.behhing.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected')
}).catch(()=>{
console.log('error connecting db')
})


//bring ejs template

app.set('view engine' , 'ejs')



//bring static
app.use(express.static('public'))
app.use(express.static('node_modules'))


//connected to database



app.get('/index' ,(req,res)=> {

   
        res.render('../views/event/index');
   

})

app.get('/', (req, res) => {
  res.render('../views/event/home');
});


app.get('/create', (req, res) => {
    res.render('../views/event/create');
  });



  //post to save from gpt

  app.post('/event/create', async (req, res) => {
    const { serviceName, description, imageUrl, companyLink } = req.body;
    try {
        const newService = new Service({ serviceName, description, imageUrl, companyLink });
        await newService.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
})

//bring services routes

const services=require('./routes/service-routes')

app.use('/services', services)



app.listen(3000,() => {
    console.log("web is working")
})

/*if(process.env.NODE_EVN =="test") app.set("port", 3001)
  else
app.set("port", process.env.PORT || 3000)*/

