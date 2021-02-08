const express = require('express');
const PORT = 3000;
const app = express()
app.use(express.static('public'));
app.set('view engine', 'ejs'); 





app.get("/", (req, res) => { 
   res.render("pages/index", {})
})
app.post("/myform", (req, res) => { // GET HTML form data from browser to server
    let formData = req.body;
    console.log(formData)
}) 
app.listen(PORT, () =>{
    console.log(`Server Started. Listening at http://localhost:${PORT}`);
});