const ProviderEngine = require("web3-provider-engine");
const { GanacheSubprovider } = require("@0x/subproviders");
const {
  CoverageSubprovider,
  TruffleArtifactAdapter
} = require("@0x/sol-coverage");

const projectRoot = "";
const solcVersion = "0.5.0";
const defaultFromAddress = "0x5409ed021d9299bf6814279a6a1411a7e866a631";
const isVerbose = true;
const artifactAdapter = new TruffleArtifactAdapter(projectRoot, solcVersion);
const provider = new ProviderEngine();

provider.addProvider(
  new CoverageSubprovider(artifactAdapter, defaultFromAddress, isVerbose)
);
const ganacheSubprovider = new GanacheSubprovider({
  verbose: true,
  logger: console
});
provider.addProvider(ganacheSubprovider);
provider.start();
/**
 * HACK: Truffle providers should have `send` function, while `ProviderEngine` creates providers with `sendAsync`,
 * but it can be easily fixed by assigning `sendAsync` to `send`.
 */
provider.send = provider.sendAsync.bind(provider);

module.exports = {
  networks: {
    development: {
      provider,
      network_id: "*"
    }
  }
};
