const express = require('express');
const connectDB = require('./db');
const registerRouter = require('./routes/register');
const port = process.env.PORT || 5070; 
const app = express();

// Connect to MongoDB
connectDB();

// Mount register route
app.use('/api/register', registerRouter);

// ... (other routes and server configuration)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
