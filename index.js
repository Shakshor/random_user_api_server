const express = require('express');
const app = express();
// const cors = require('cors');
const port = process.env.PORT || 5000;
const UserRoute = require('./routes/v1/user.route.js');

// app.use(cors());
app.use(express.json());


app.use('/api/v1/user', UserRoute);


// app.get('/', (req, res) => {
//     res.send("Hello Users");
// });

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})