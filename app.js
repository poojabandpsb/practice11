const express = require('express');
const app = express();
const port = 8200;

app.get('/', (req, res) => {
  res.send('Hello World from Express! This app is created for the demo purpose.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
