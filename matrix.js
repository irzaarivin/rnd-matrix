require('dotenv').config({ path: './.env' })

const sdk = require('matrix-js-sdk')
const matrix = sdk.createClient({ 
  baseUrl: process.env.MATRIX_SERVER || 'https://matrix.org',
  accessToken: process.env.MATRIX_ACCESS_TOKEN || 'syt_YXJpdmluaXJ6YQ_DoJosqpTUwwGEFjAXtjY_3CzbOq',
  userId: process.env.MATRIX_USERNAME || '@arivinirza:matrix.org',
})
matrix.startClient({ initialSyncLimit: 10 });

module.exports = matrix