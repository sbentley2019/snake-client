const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // or '172.46.2.204',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

module.exports = {
  connect
};