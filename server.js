const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'build')));
// I'm comment , you should to pull me
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

//main is here before rebase,hamza(:
// Said comment 
