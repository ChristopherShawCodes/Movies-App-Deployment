const mongoose = require('mongoose')
db = 'moviedb'


mongoose.connect(`mongodb://localhost/${db}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log(`Connected to ${db}`)
}).catch((err) =>{
    console.log(`Unable to connect to ${db}`)
})