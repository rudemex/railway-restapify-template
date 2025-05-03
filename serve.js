const Restapify = require('restapify').default
const {resolve} = require('path')

const apiFolderPath = resolve(__dirname, './api')

const rpfy = new Restapify({
  rootDir: apiFolderPath,
  port: process.env.PORT || 6767,
  publicPath: process.env.PUBLIC_PATH || 'api/',
  openDashboard: process.env.OPEN_DASHBOARD_PATH || 'true'
})

console.log("route", rpfy.getServedRoutes());

rpfy.on('error', ({error, message}) => {
   console.log(error + ' ' + message)
})

rpfy.on('start', () => {
  console.log(`restapify API is served at ${rpfy.publicPath}`);
})

rpfy.run()
