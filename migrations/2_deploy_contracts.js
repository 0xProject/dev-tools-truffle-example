const SafeMath = artifacts.require("SafeMath");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(MetaCoin);
};
