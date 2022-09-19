module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
networks: {
  development1: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*" // match any network
  },
  development2: {
    host: "107.5.111.63",
    port: 30308,
    network_id: "*",
    gasPrice: 230000
  }
}
// to customize your Truffle configuration!
};
