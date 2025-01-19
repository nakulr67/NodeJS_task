const mongoose = require('mongoose');


const db = async () =>{
        mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })  
          
.then(() => console.log('MongoDB has been connected...'))
.catch(err => console.log(err));
    
}


module.exports = {db};
