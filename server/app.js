const express = require('express');
const PORT = 3000;
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 





app.get("/", (req, res) => { 
   res.render("pages/index", {})
})
app.post('/formData', function (req, res) {
    let newDAta = req.body.name + "you two";
    res.render('pages/somefile', { name: newDAta, email: req.body.email, message: req.body.message });
});
app.post("/myform", (req, res) => { // GET HTML form data from browser to server
    let formData = req.body;
    console.log(formData)
}) 
app.listen(PORT, () =>{
    console.log(`Server Started. Listening at http://localhost:${PORT}`);
});