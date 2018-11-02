require('dotenv').config();
exports.apiKey = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
exports.database = {
  mysqlEndpoint: process.env.RDS_ENDPOINT,
  rdsUser: process.env.RDS_USER,
  rdsPort: process.env.RDS_PORT,
  rdsPassword: process.env.RDS_PASSWORD,
  rdsName: process.env.RDS_NAME
};

