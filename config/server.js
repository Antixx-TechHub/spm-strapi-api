module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  url: 'https://cms.spmglobaltech.com',
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
});