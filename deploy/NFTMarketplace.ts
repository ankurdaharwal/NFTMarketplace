module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const paymentToken = await deploy("PaymentToken", {
    from: deployer,
    // gas: 4000000,
    args: ["Payment Token", "PMT", 18],
  });

  const nftMarketplace = await deploy("NFTMarketplace", {
    from: deployer,
    // gas: 4000000,
    args: [paymentToken.address, deployer],
  });
};
