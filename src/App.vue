<template>
  <!-- menu -->
  <div class="menu">
    <div class="menu-left">
      <img class="logo-img" src="./assets/logo.png" alt="logo" />
      <div class="logo-name">LuckyDraw</div>
      <button class="treasury-button" disabled>
        {{ treasuryBalance }}
      </button>
    </div>
    <div class="menu-right">
      <router-link
        to="/draw"
        :class="{
          'menu-draw-button': true,
          active: $route.path === '/draw' || $route.path === '/',
        }"
        >Draw</router-link
      >
      <router-link
        to="/profile"
        :class="{
          'menu-profile-button': true,
          active: $route.path === '/profile',
        }"
        >Profile</router-link
      >
      <button
        class="wallet-button"
        @click="connectWallet"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        {{ buttonLabel }}
      </button>
    </div>
  </div>

  <router-view></router-view>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { ethers } from "ethers";

// Treasury
const treasuryBalance = ref("Loading...");

onMounted(async () => {
  await loadBalance();

  try {
    const providerWithSigner = new ethers.BrowserProvider(window.ethereum);
    const signer = await providerWithSigner.getSigner();
    // console.log("Account:", await signer.getAddress());
    userAddress.value = await signer.getAddress();
    isConnected.value = true;
  } catch (error) {
    console.error(error);
  }
});

async function loadBalance() {
  const contractAddress = "0x0CFADaB77eC10CB761E11ed15E99d1e117B25769";
  const provider = new ethers.JsonRpcProvider(
    "https://arbitrum-sepolia.blockpi.network/v1/rpc/public"
  );

  try {
    const balance = await provider.getBalance(contractAddress);
    const balanceInEth = ethers.formatEther(balance);
    treasuryBalance.value = `Treasury ${balanceInEth} ETH`;
  } catch (error) {
    console.error("Error fetching balance:", error);
    treasuryBalance.value = "Failed to fetch balance";
  }
}

// Connect Button
const isConnected = ref(false);
const userAddress = ref(null);
const isHovering = ref(false);

const formattedAddress = computed(() => {
  if (userAddress.value) {
    return `${userAddress.value.substring(
      0,
      6
    )}...${userAddress.value.substring(userAddress.value.length - 4)}`;
  }
  return "";
});
const buttonLabel = computed(() => {
  if (isConnected.value) {
    return isHovering.value ? "Disconnect" : formattedAddress.value;
  }
  return "Connect";
});
const connectWallet = async () => {
  if (!isConnected.value) {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length === 0) throw new Error("No accounts found.");
        userAddress.value = accounts[0]; // Store the first account as the user address
        isConnected.value = true;

        const currentChainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        const arbitrumSepoliaChainId = "0x66eee"; // Hexadecimal version of 421614, prefixed with 0x

        if (currentChainId !== arbitrumSepoliaChainId) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: arbitrumSepoliaChainId }],
            });
          } catch (switchError) {
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: arbitrumSepoliaChainId,
                    chainName: "Arbitrum Sepolia",
                    nativeCurrency: {
                      name: "Ether",
                      symbol: "ETH",
                      decimals: 18,
                    },
                    rpcUrls: [
                      "https://arbitrum-sepolia.blockpi.network/v1/rpc/public",
                    ],
                    blockExplorerUrls: ["https://sepolia-explorer.arbitrum.io"],
                  },
                ],
              });
            } else {
              throw new Error(switchError.message);
            }
          }
        }
      } catch (error) {
        alert("Failed to connect wallet: " + error.message);
      }
    } else {
      alert("Please install MetaMask!");
    }
  } else {
    // Disconnect logic
    userAddress.value = null;
    isConnected.value = false;
  }
};

const handleMouseEnter = () => {
  if (isConnected.value) {
    isHovering.value = true;
  }
};
const handleMouseLeave = () => {
  isHovering.value = false;
};
</script>

<style>
/* menu */
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  font-family: "Inter";
  font-style: normal;

  /* margin-bottom: 10px; */
}

.menu-left,
.menu-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  width: 60px;
}

.logo-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;

  color: #ffc342;

  margin-right: 16px;
}

.treasury-button {
  width: 160px;
  height: 34px;
  background: #7977c4;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  color: white;
}
.treasury-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

body {
  height: 100vh;
  background: linear-gradient(to bottom, #707398 14.12%, #b2b4d6 86.73%);
}

.menu-draw-button,
.menu-profile-button {
  font-size: 18px;
  text-decoration: none;

  color: black;
  border-color: transparent;
  background-color: transparent;

  cursor: pointer;

  margin-right: 16px;
}

.active {
  font-weight: 800;
}

.wallet-button {
  width: 160px;
  height: 34px;
  background: #d8943c;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  color: white;
}
.wallet-button:hover {
  background-color: #c67c00; /* Darken the button color slightly on hover */
}
</style>
