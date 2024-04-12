const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env'});


const DB = `mongodb+srv://chunke135:9lJvdebg5WPs0F4f@cluster0.mbjrcw6.mongodb.net/Quizzy`;
// const db = client.db('Quizzy');
// const pdfCollection = db.collection('pdfs');


mongoose.connect(DB ,
    {
    useNewurlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false

}
).then(con => {
    // console.log(con.connections);
    console.log(`DB connection succesful`);
}).catch((err) => {
console.log('failed connection to the databse', err.message)
});

// mongoose.connect('mongodb://127.0.0.1:27017/example', {}).then(res => console.log('connected to DB successfullly'))
// const port = process.env.PORT || 8000;
app.listen(8000, () => 

{console.log(`Connected to port 8000`)

})

mongoose.set('debug', true);

