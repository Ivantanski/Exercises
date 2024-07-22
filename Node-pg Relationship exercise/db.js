/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql:///biztime",
});

client.connect()
  .then(() => console.log("Connected to the BizTime database"))
  .catch(err => console.error("Connection error", err.stack));

module.exports = client;
