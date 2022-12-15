const {Client} = require('pg');

const client = new Client({
  host:'containers-us-west-96.railway.app',
  user:'postgres',
  port:'6122',
  password:'H1G7kg98ya6HeD9a8uKB',
  database:'railway'
});

console.log('here');

client.connect()
.then(() => {
  console.log('database connected');
})
.catch(err => {
  console.error(err.message);
});

module.exports = client;