const express = require('express');
const app = express();
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.send("<h1>Hey this page is not yet completed please go to /home</h1>")
})
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/home.html');
})

app.get('/Medicines.html',(req,res)=>{
    res.sendFile(__dirname + '/Medicines.html');
})

app.all(['/addToCart', '/add-to-cart.html' ,'/add-to-cart'], (req, res) => {
    res.sendFile(__dirname + '/add-to-cart.html');
});
app.get('/payment.html',(req,res)=>{
    res.sendFile(__dirname + '/payment.html');
})

app.use(['/about','/aboutus.html'],(req,res)=>{
    res.sendFile(__dirname + '/aboutus.html');
})

app.use(['/awareness','/html%20project.html'],(req,res)=>{
    res.sendFile(__dirname+'/html project.html');
})

app.use(['/email','/email.html'],(req,res)=>{
    res.sendFile(__dirname+'/email.html');
})

app.listen(9090);