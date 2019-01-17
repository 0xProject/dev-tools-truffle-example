const MetaCoin = artifacts.require("MetaCoin");
const SafeMath = artifacts.require("SafeMath");

const mode = process.env.MODE;

contract("MetaCoin", accounts => {
  after("write coverage/profiler output", async () => {
    if (mode === "profile") {
      await global.profilerSubprovider.writeProfilerOutputAsync();
    } else if (mode === "coverage") {
      await global.coverageSubprovider.writeCoverageAsync();
    }
  });
  it("should send coin correctly", async () => {
    const metaCoinInstance = await MetaCoin.deployed();
    const safeMathInstance = await SafeMath.deployed();
    const accountOne = accounts[0];
    const accountTwo = accounts[1];
    const amount = 2; // The balance of the owner (account[0]) is 1 (assigned in the constructor), so the transaction sending 2 will fail.
    if (mode === "profile") {
      global.profilerSubprovider.start();
    }
    await metaCoinInstance.sendCoin(
      safeMathInstance.address,
      accountTwo,
      amount,
      { from: accountOne }
    );
    if (mode === "profile") {
      global.profilerSubprovider.stop();
    }
  });
});
