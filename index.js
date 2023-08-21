const express=require('express')
const phones=require('./phones.json')
const app=express();
const port=3000

app.get('/',(req,res)=>{
    res.send('Hi..!! I am server...')
})

app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req,res)=>{
    const id= parseInt(req.params.id);
    const getId=phones.find(phone=>phone.id===id)||{};
    res.send(getId);
})
app.listen(port, ()=>{
    console.log(`phone shop server on port : ${port}`)
})