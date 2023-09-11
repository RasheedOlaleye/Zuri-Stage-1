const express = require('express');
const app = express();
const port = 3000;

const validateUtcTime = (req, res, next) => {
  const UTCTime = new Date().getTimezoneOffset() / 60;
  if (UTCTime >= -2 && UTCTime <= 2) {
    next();
  } else {
    res.status(400).json({ error: 'Invalid UTC time offset' });
  }
};

app.use(validateUtcTime);

app.get('/api', (req, res) => {
  const param1 = req.query.param1;
  const param2 = req.query.param2;

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const current_day = daysOfWeek[new Date().getDay()];

  // Get current UTC time in the desired format
  const now = new Date();
  const utc_time = now.toISOString(); // Format as "2023-08-21T15:04:05.123Z"

  const github_file_url = 'https://github.com/RasheedOlaleye/Zuri-Stage-1.git';
  const github_repo_url = 'https://github.com/RasheedOlaleye/Zuri-Stage-1/tree/main/Stage1';

  const response = {
    slack_name: 'Rasheed_Olaleye',
    current_day,
    utc_time,
    track: 'backend',
    github_file_url,
    github_repo_url,
    status_code: 200
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
