const express = require('express');
const path = require('path');

const app = express();
const buildDir = path.join(__dirname, 'build');
const port = Number(process.env.PORT) || 3000;

app.get('/healthz', (_req, res) => {
  res.status(200).send('ok');
});

app.use(express.static(buildDir));

app.get('*', (_req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

app.listen(port, () => {
  // Log the bound port for Cloud Run/App Hosting diagnostics.
  console.log(`Server listening on port ${port}`);
});
