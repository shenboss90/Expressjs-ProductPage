const router = require('express').Router()
const path = require('path')
let Products = []

router.get('/product' , (req , res)=>{
    res.render('product' , {pro:Products})
    // res.sendFile(path.join(__dirname, '../', 'views','product.html'))
})

router.get('/addProduct' , (req , res)=>{
    res.sendFile(path.join(__dirname, '../', 'views','addProduct.html'))
})



router.post('/addProduct' , (req,res)=>{

Products.push(req.body)
res.redirect('/product')
})





module.exports= router