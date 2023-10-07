const express = require('express')
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
require('./config/cors.config.js')(app);
require('./config/route.config.js')(app)
const db = require('./config/database.config.js');


db.sequelize.sync().then(() => {
    console.log('Database Connected Successfully!!');
});


app.get('/',(req,res)=>{
    res.send('Server is Running Cool!')
})

app.listen(PORT,()=>{
    console.log(`Server is Running on Port : ${PORT}`)
})
