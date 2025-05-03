const Restapify = require('restapify').default;
const { resolve } = require('path');

// Variables de entorno
const PORT = process.env.PORT || 6767;
const PUBLIC_PATH = process.env.PUBLIC_PATH || 'api/';
const PUBLIC_URL = process.env.PUBLIC_URL || `http://localhost:${PORT}`;
const OPEN_DASHBOARD = process.env.OPEN_DASHBOARD_PATH === 'false';

// Ruta a la carpeta con los JSON
const apiFolderPath = resolve(__dirname, './api');

// Crear instancia
const rpfy = new Restapify({
  rootDir: apiFolderPath,
  port: PORT,
  publicPath: PUBLIC_PATH,
  openDashboard: OPEN_DASHBOARD,
});

// Eventos
rpfy.on('start', () => {
  const apiUrl = `${PUBLIC_URL.replace(/\/$/, '')}/${PUBLIC_PATH}`;
  const dashboardUrl = `${PUBLIC_URL.replace(/\/$/, '')}/restapify`;

  console.log('\x1b[32m✔ Restapify server running\x1b[0m');
  console.log(`📡 API:       ${apiUrl}`);
  console.log(`🛠  Dashboard: ${dashboardUrl}`);
  console.log('📁 Serving from:', apiFolderPath);
  console.log('📌 Available routes:');
  rpfy.getServedRoutes().forEach((route) => {
    console.log('  ↳', route);
  });
});

rpfy.on('error', ({ error, message }) => {
  console.error('\x1b[31m✖ Restapify error:\x1b[0m', message);
  if (error) console.error(error);
});

rpfy.run();
