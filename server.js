const express = require('express');
const app = express();
const port = 3000;

// Middleware function to log request details
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Use the middleware function in the app
app.use(requestLogger);

// HTML content for the favorite place page
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Favorite Place: Paris</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333;
    }
    p {
      line-height: 1.6;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to Paris</h1>
    <p>Paris, the capital city of France, is renowned for its art, fashion, gastronomy, and culture. The city's 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.</p>
    <p>Known as the "City of Light," Paris is home to many iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, which houses the Mona Lisa.</p>
   
  </div>
</body>
</html>
`;

// Simple route to serve the HTML content
app.get('/', (req, res) => {
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
