// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stickers-web-store'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-stickers-web-store'
  },
};
