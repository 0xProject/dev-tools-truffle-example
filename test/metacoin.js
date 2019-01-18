const MetaCoin = artifacts.require("MetaCoin");
const SafeMath = artifacts.require("SafeMath");

contract("MetaCoin", accounts => {
  it("should send coin correctly", async () => {
    const metaCoinInstance = await MetaCoin.deployed();
    const safeMathInstance = await SafeMath.deployed();
    const accountOne = accounts[0];
    const accountTwo = accounts[1];
    const amount = 1; // The balance of the owner (account[0]) is 1 (assigned in the constructor), so the transaction sending 2 will fail.
    await metaCoinInstance.sendCoin(
      safeMathInstance.address,
      accountTwo,
      amount,
      { from: accountOne }
    );
  });
});
