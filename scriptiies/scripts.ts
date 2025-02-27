import hre from 'hardhat';

async function main() {
  const juneNFT = await hre.ethers.getContractFactory('JuneNFT');
  const juneNFTContract = await juneNFT.deploy();
  await juneNFTContract.waitForDeployment();
  console.log('JuneNFT deployed to:', juneNFTContract.target);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
