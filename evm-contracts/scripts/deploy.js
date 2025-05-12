// scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const SecureTransfer = await ethers.getContractFactory("SecureTransfer");
    const stf = await SecureTransfer.deploy(/* constructor args */);

    // For newer ethers versions (v6+)
    await stf.waitForDeployment();
    console.log("Secure Transfer deployed to:", await stf.getAddress());
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
