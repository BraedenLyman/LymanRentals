const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const buildDir = path.join(__dirname, 'build');
const indexPath = path.join(buildDir, 'index.html');
const port = Number(process.env.PORT) || 3000;
const host = '0.0.0.0';

if (!fs.existsSync(indexPath)) {
  console.error(`Missing build artifact: ${indexPath}`);
  console.error('Run the build step before starting the server.');
  process.exit(1);
}

app.get('/healthz', (_req, res) => {
  res.status(200).send('ok');
});

app.use(express.static(buildDir));

app.get('*', (_req, res) => {
  res.sendFile(indexPath);
});

app.listen(port, host, () => {
  // Log the bound port for Cloud Run/App Hosting diagnostics.
  console.log(`Server listening on http://${host}:${port}`);
});
