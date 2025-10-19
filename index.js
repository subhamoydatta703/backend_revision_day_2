const express = require('express');

const app = express();

// console.dir(app);

const port = 3000;

app.listen(port, ()=>{
    console.log(`App is listening at ${port}`);
    
})

// to send different request for different paths we use app.get or app.post 
app.get('/', (req, res)=>{
    res.send("This is homepage")
})
app.get('/about',(req, res)=>{
    res.send("This is the about page");
})

app.get('/contact',(req, res)=>{
    res.send("This is the contact path")
})


// this below app.use handles non existing path

app.use((req, res) => {
    res.status(404).send("This path does not exist");
});

// app.use send same request to all the paths

// app.use((req, res)=>{  
//     // console.log("Request received");
//     //   res.send("This is text");
//   res.send({
//     name: "Subhamoy",
//     sec: "A"
//   });
    
// })