const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const filePath = path.resolve('./data/matches.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Set the appropriate headers for a JSON content type and to allow your app to access it
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    res.status(200).send(fileContents);
  } catch (error) {
    res.status(500).send({ error: 'Could not retrieve data.' });
  }
};