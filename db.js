const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({ path: './config.env'});


const DB = `mongodb+srv://chunke135:9lJvdebg5WPs0F4f@cluster0.mbjrcw6.mongodb.net/Quizzy`;


mongoose.connect(DB ,
    {
    useNewurlParser: true,

}
).then(con => {
   
    console.log(`DB connection succesful`);
}).catch((err) => {
console.log('failed connection to the databse', err.message)
});


mongoose.set('debug', true);

