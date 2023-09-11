const express = require('express');
const app = express();
const port = 3000; // You can choose any available port


const validateUtcTime = (req, res, next) => {
    const UTCTime = new Date().getTimezoneOffset() / 60;
    if (UTCTime >= -2 && UTCTime <= 2) {
      next();
    } else {
      res.status(400).json({ error: 'Invalid UTC time offset' });
    }
  };

  app.use(validateUtcTime)

  app.get('/api/endpoint', (req, res) => {
    // Get query parameters from the request
    const param1 = req.query.param1;
    const param2 = req.query.param2;
  
    // Get current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const current_day = daysOfWeek[new Date().getDay()];
  
    // Get current UTC time
    const utc_time = new Date().toUTCString();

  // Get GitHub URLs
  const   github_file_url = 'https://github.com/RasheedOlaleye/Zuri-Stage-1.git';
  const  github_repo_url = 'https://github.com/RasheedOlaleye/Zuri-Stage-1/tree/main/Stage1';

  // Construct the response object
  const response = {
    slack_name: 'Rasheed_Olaleye',
    current_day,
    utc_time,
    track: 'backend',
    github_file_url,
    github_repo_url,
    status_code: 200
  };

  // Return the result in JSON format
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
