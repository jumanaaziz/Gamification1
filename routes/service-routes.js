const express= require("express")
const router=express.Router()
const service=require('../models/services')


router.get('/', (req,res)=> {
    res.render('../views/event/index')

})



// Route to get all services
router.get('/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//for the form
router.get('/create', (req,res)=>{
    res.render('../views/event/create')
})

//save form in db
router.post('/create', (req,res)=>{

 console.log(req.body)
 let newEvent= new services
  ({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    linkUrl: req.body.linkUrl,
    created_at: Data.now()
 })

 newEvent.save((err)=>{
    if(!err){
        console.log('added successfully')
          res.redirect('/')
    }

    else{
        console.log('failed to add')
    }

 })
})




router.post('/services,', async (req, res) => {
    try {
        const { serviceName, description, imageUrl, companyLink } = req.body;
        const newService = new Service({ serviceName, description, imageUrl, companyLink });
        await newService.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error adding service:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;


router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.render('index', { services });
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;



