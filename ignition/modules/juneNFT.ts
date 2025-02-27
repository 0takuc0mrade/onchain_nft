// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const nftModule = buildModule("JuneNFTModule", (m) => {


  const juneNFT = m.contract("JuneNFT",
);

  return { juneNFT };
});

export default nftModule;
