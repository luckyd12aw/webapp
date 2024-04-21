<template>
  <!-- menu -->
  <div class="menu">
    <div class="menu-left">
      <img class="logo-img" src="./assets/logo.png" alt="logo" />
      <a href="/draw" class="routerLink">
        <div class="logo-name">LuckyDraw</div>
      </a>
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

      <div class="network-container">
        <img
          class="select-image"
          :src="selectedNetworkImage"
          alt="Select Network"
          @click="toggleModal"
        />

        <div v-if="showModal" class="modal">
          <div class="modal-content">
            <span class="close" @click="toggleModal">&times;</span>
            <h2>Select Network</h2>
            <button
              class="modal-select-button"
              @click="handleNetworkChange('0x66eee', 'Arbitrum', arbImage)"
            >
              <img class="modal-select-image" src="./assets/networks/arb.png" />
            </button>
            <button
              class="modal-select-button"
              @click="handleNetworkChange('0x2f2019c144', 'Avail', availImage)"
            >
              <img
                class="modal-select-image"
                src="./assets/networks/avail.png"
              />
            </button>
            <button
              class="modal-select-button"
              @click="handleNetworkChange('0xe9ac0ce', 'Neon', neonImage)"
            >
              <img
                class="modal-select-image"
                src="./assets/networks/neon.png"
              />
            </button>
            <button
              class="modal-select-button"
              @click="handleNetworkChange('0xa96', 'Morph', morphImage)"
            >
              <img
                class="modal-select-image"
                src="./assets/networks/morph.svg"
              />
            </button>
          </div>
        </div>
      </div>
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

import arbImage from "@/assets/networks/arb.png";
import availImage from "@/assets/networks/avail.png";
import neonImage from "@/assets/networks/neon.png";
import morphImage from "@/assets/networks/morph.svg";

const selectedNetworkImage = ref(arbImage);
const showModal = ref(false);

function toggleModal() {
  showModal.value = !showModal.value;
}

// Treasury
const treasuryBalance = ref("Loading...");

onMounted(async () => {
  // Connect wallet if not already connected
  if (!isConnected.value) {
    await connectWallet();
  }

  await loadBalance();
});

async function getChainId() {
  if (window.ethereum) {
    try {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      return chainId;
    } catch (error) {
      console.error("Failed to get chain ID:", error);
    }
  }
  // else {
  //   alert(
  //     "Ethereum provider (e.g., MetaMask) not found. Please install it to use this feature."
  //   );
  // }
}

const chainName = ref("arb");
const contractAddress = ref("0x10a04C6DD2b65a09839Fad31BA4818D60423d6C6");
const provider = ref("https://arbitrum-sepolia.blockpi.network/v1/rpc/public");

async function loadBalance() {
  const chainId = await getChainId();
  if (chainId == "0x2f2019c144") {
    chainName.value = "avail";
    contractAddress.value = "0x40e86969a34325319Ad41995158aD8B2333824Dd";
    provider.value = "https://op-avail-sepolia.alt.technology/";
  } else if (chainId == "0xe9ac0ce") {
    chainName.value = "neon";
    contractAddress.value = "0x29b8086DC9CFD893Aba9AAdaD82491dBCb431910";
    provider.value = "https://devnet.neonevm.org";
  } else if (chainId == "0xa96") {
    chainName.value = "morph";
    contractAddress.value = "0x16eDa3Fca8c4509B7D131A3D7bE7097EC990F578";
    provider.value = "https://rpc-testnet.morphl2.io";
  } else {
    // if (chainId == "0x66eee") {
    chainName.value = "arb";
    contractAddress.value = "0x10a04C6DD2b65a09839Fad31BA4818D60423d6C6";
    provider.value = "https://arbitrum-sepolia.blockpi.network/v1/rpc/public";
  }

  const _provider = new ethers.JsonRpcProvider(provider.value);
  try {
    const balance = await _provider.getBalance(contractAddress.value);
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
const handleNetworkChange = async (chainId, chainName, image) => {
  toggleModal();

  // Connect wallet if not already connected
  if (!isConnected.value) {
    await connectWallet();
  }

  // Switch to the selected network
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainId }],
    });
    selectedNetworkImage.value = image;
    await loadBalance();
  } catch (error) {
    if (error.code === 4902) {
      // Chain not found, need to add it
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: chainId,
            chainName: chainName,
            nativeCurrency: {
              name: "Ether",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: ["https://your.rpc.url"],
            blockExplorerUrls: ["https://your.explorer.url"],
          },
        ],
      });
    } else {
      console.error("Failed to switch network:", error);
    }
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
.network-container {
  margin-right: 14px;
}

.select-image {
  width: 36px;
  cursor: pointer;
}

.modal-select-button {
  border-color: transparent;
  background-color: transparent;

  margin-right: 10px;
  margin-bottom: 20px;
}

.modal-select-button:last-child {
  margin-right: 0px;
}

.modal-select-image {
  width: 60px;
  cursor: pointer;
}

.modal-content {
  position: fixed;
  top: 400px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 260px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal {
  position: fixed;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
}

.close {
  float: right;
  font-size: 28px;
  cursor: pointer;
}

.routerLink {
  text-decoration: none;
}

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
  background-color: #c67c00;
  /* Darken the button color slightly on hover */
}
</style>
