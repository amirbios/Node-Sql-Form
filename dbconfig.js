const config = {
  user: "amirbios", // sql user
  password: "@Amirbios93", //sql user password
  server: "localhost", // if it does not work try- localhost
  database: "amirbios",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS", // SQL Server instance name
  },
  port: 1433,
};

module.exports = config;
