const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000

//import route undian
const undianRouter = require('./routes/undian');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/doorprizes', undianRouter); // use route undian di Express

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})