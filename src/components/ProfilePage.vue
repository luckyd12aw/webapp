<template>
  <!-- details -->
  <div class="details">
    <div class="details-head">{{ (nfts && nfts.length) || 0 }} NFT</div>
    <div class="details-sub">
      Discover the winning NFTs from the Lucky Draw platform!
    </div>
  </div>
  <div class="nft-continer">
    <div class="my-nft-container">
      <div class="my-nft-wrapper" v-for="nft in nfts" :key="nft.tokenId">
        <div class="my-nft-wrapper">
          <div class="my-nft-price-container">
            <img class="eth-img" src="../assets/networks/eth.png" alt="eth" />
            <div class="nft-price-text">
              {{
                (nft.tokenId !== undefined &&
                  descriptions[nft.tokenId].price) ||
                "0.0000"
              }}
              ETH
            </div>
          </div>
          <div class="my-nft-title-container" v-if="nft.isClaimed">
            <img
              class="my-arb-img"
              src="../assets/networks/arb.png"
              alt="arb"
            />
            <div class="my-nft-text">
              LuckyDraw #{{
                (nft.tokenId !== undefined && nft.tokenId.toString()) || "-1"
              }}
            </div>
            <a
              target="_blank"
              href="https://sepolia.arbiscan.io/address/0x10a04C6DD2b65a09839Fad31BA4818D60423d6C6"
            >
              <button class="my-website-button">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.90625 5.98956H13.3815C13.8129 5.98956 14.1627 5.63979 14.1627 5.20831C14.1627 4.77684 13.8129 4.42706 13.3815 4.42706H3.75C2.97335 4.42706 2.34375 5.05667 2.34375 5.83331V21.25C2.34375 22.0267 2.97335 22.6563 3.75 22.6563H19.1667C19.9433 22.6563 20.5729 22.0267 20.5729 21.25V11.6186C20.5729 11.1871 20.2231 10.8373 19.7917 10.8373C19.3602 10.8373 19.0104 11.1871 19.0104 11.6186V21.0938H3.90625V5.98956Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.0137 2.88812C21.8671 2.7416 21.6685 2.6593 21.4612 2.6593H15.8423C15.4109 2.6593 15.0611 3.00907 15.0611 3.44055C15.0611 3.87202 15.4109 4.2218 15.8423 4.2218H19.5751L13.5432 10.2538C13.2381 10.5589 13.2381 11.0536 13.5432 11.3587C13.8482 11.6638 14.3428 11.6638 14.648 11.3587L20.6799 5.32666V9.05942C20.6799 9.49088 21.0297 9.84067 21.4612 9.84067C21.8927 9.84067 22.2424 9.49088 22.2424 9.05942V3.44055C22.2424 3.23335 22.1601 3.03463 22.0137 2.88812Z"
                    fill="white"
                  />
                </svg>
              </button>
            </a>
          </div>
          <div
            class="my-nft-claim-container"
            v-if="!nft.isClaimed"
            @click="getNFT(nft.tokenId)"
          >
            <div class="my-nft-claim-text">
              {{ getLoading }} #{{
                (nft.tokenId !== undefined && nft.tokenId.toString()) || "-1"
              }}
            </div>
          </div>
          <img class="my-nft-img" :src="getImagePath(nft.idx)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { ethers } from "ethers";

let chainId;
const chainName = ref("arb");
const provider = ref("https://arbitrum-sepolia.blockpi.network/v1/rpc/public");
const contractAddress = ref("0x10a04C6DD2b65a09839Fad31BA4818D60423d6C6");
const explorer = ref(
  "https://sepolia.arbiscan.io/address/0x10a04C6DD2b65a09839Fad31BA4818D60423d6C6"
);

import descriptions from "../assets/nfts/descriptions.json";
const filteredDescriptions = computed(() => {
  return descriptions.filter((item) => item.chain === chainName.value);
});

const abi = [
  {
    inputs: [],
    name: "allMetadata",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "startTime", type: "uint256" },
          { internalType: "uint256", name: "endTime", type: "uint256" },
          { internalType: "uint256", name: "annTime", type: "uint256" },
          { internalType: "address", name: "winner", type: "address" },
          { internalType: "address[]", name: "candidates", type: "address[]" },
        ],
        internalType: "struct Metadata[]",
        name: "metas",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "reward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

import image0 from "@/assets/nfts/0.jpeg";
import image1 from "@/assets/nfts/1.jpeg";
import image2 from "@/assets/nfts/2.jpeg";
import image3 from "@/assets/nfts/3.jpeg";
import image4 from "@/assets/nfts/4.jpeg";
import image5 from "@/assets/nfts/5.jpeg";
import image6 from "@/assets/nfts/6.jpeg";
import image7 from "@/assets/nfts/7.jpeg";
import image8 from "@/assets/nfts/8.jpeg";
import image9 from "@/assets/nfts/9.jpeg";
import image10 from "@/assets/nfts/10.jpeg";
import image11 from "@/assets/nfts/11.jpeg";

const getImagePath = (idx) => {
  console.log(idx);
  if (idx == 0) return image0;
  if (idx == 1) return image1;
  if (idx == 2) return image2;
  if (idx == 3) return image3;
  if (idx == 4) return image4;
  if (idx == 5) return image5;
  if (idx == 6) return image6;
  if (idx == 7) return image7;
  if (idx == 8) return image8;
  if (idx == 9) return image9;
  if (idx == 10) return image10;
  if (idx == 11) return image11;
  return image0;
};

// const provider = new ethers.JsonRpcProvider(
//   "https://arbitrum-sepolia.blockpi.network/v1/rpc/public"
// );

let contractWithSigner;
const signerAddress = ref(ethers.ZeroAddress);

// NFTs
// Reactive state for NFTs
const rawNfts = ref([]);

// Computed property for NFTs
const nfts = computed(() => {
  return rawNfts.value.map((nft) => ({
    ...nft,
    price: filteredDescriptions.value[nft.tokenId]?.price || "0.0000",
    description:
      filteredDescriptions.value[nft.tokenId]?.description ||
      "No description available",
    isClaimed: nft.isClaimed,
    idx: filteredDescriptions.value[nft.tokenId]?.idx || 0,
  }));
});

const getLoading = ref("Claim 🎁");

// TODO: multicall
async function fetchNFTData() {
  if (contractWithSigner) {
    const allMetadata = await contractWithSigner.allMetadata();
    const signerNfts = [];
    for (const [idx, nft] of allMetadata.entries()) {
      if (nft.winner.toLowerCase() === signerAddress.value.toLowerCase()) {
        const isClaimed = await (async () => {
          try {
            await contractWithSigner.reward.staticCall(idx);
            return false;
          } catch (error) {
            return true;
          }
        })();
        signerNfts.push({
          tokenId: idx,
          price: nft.price, // Assume this comes from contract directly if needed
          startTime: nft.startTime,
          endTime: nft.endTime,
          annTime: nft.annTime,
          winner: nft.winner,
          candidates: nft.candidates,
          isClaimed: isClaimed,
        });
      }
    }
    rawNfts.value = signerNfts;
  }
}

const getNFT = async (tokenId) => {
  if (contractWithSigner) {
    getLoading.value = "Claim 💭";
    try {
      const tx = await contractWithSigner.reward(tokenId);
      const res = await tx.wait();
      res;
      // After transaction is confirmed
      getLoading.value = "Claim 🎁";
      const updatedIndex = rawNfts.value.findIndex(
        (nft) => nft.tokenId === tokenId
      );
      if (updatedIndex !== -1) {
        rawNfts.value[updatedIndex].isClaimed = true;
      }
    } catch (error) {
      console.error(error);
      getLoading.value = "Claim 🎁";
    }
  }
};

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

// Mount & Unmount
let intervalId;
onMounted(async () => {
  intervalId = setInterval(async () => {
    // Provider Settings

    const prevChainId = chainId;
    chainId = await getChainId();
    if (chainId == "0x2f2019c144") {
      chainName.value = "avail";
      contractAddress.value = "0x40e86969a34325319Ad41995158aD8B2333824Dd";
      provider.value = "https://op-avail-sepolia.alt.technology/";
      explorer.value =
        "https://op-avail-sepolia-explorer.alt.technology/address/0x40e86969a34325319Ad41995158aD8B2333824Dd?tab=contract";
    } else if (chainId == "0xe9ac0ce") {
      chainName.value = "neon";
      contractAddress.value = "0x29b8086DC9CFD893Aba9AAdaD82491dBCb431910";
      provider.value = "https://devnet.neonevm.org";
      explorer.value =
        "https://devnet.neonscan.org/address/0x29b8086DC9CFD893Aba9AAdaD82491dBCb431910";
    } else if (chainId == "0xa96") {
      chainName.value = "morph";
      contractAddress.value = "0x16eDa3Fca8c4509B7D131A3D7bE7097EC990F578";
      provider.value = "https://rpc-testnet.morphl2.io";
      explorer.value =
        "https://explorer-testnet.morphl2.io/address/0x16eDa3Fca8c4509B7D131A3D7bE7097EC990F578";
    } else {
      // if (chainId == "0x66eee") {
      chainName.value = "arb";
      contractAddress.value = "0x10a04C6DD2b65a09839Fad31BA4818D60423d6C6";
      provider.value = "https://arbitrum-sepolia.blockpi.network/v1/rpc/public";
      explorer.value =
        "https://sepolia.arbiscan.io/address/0x10a04C6DD2b65a09839Fad31BA4818D60423d6C6";
    }

    try {
      const providerWithSigner = new ethers.BrowserProvider(window.ethereum);
      const signer = await providerWithSigner.getSigner();
      // console.log("Account:", await signer.getAddress());
      signerAddress.value = await signer.getAddress();
      contractWithSigner = new ethers.Contract(
        contractAddress.value,
        abi,
        signer
      );

      // await fetchNFTData();
    } catch (error) {
      console.error(error);
    }

    if (prevChainId != chainId) {
      await fetchNFTData();
    }
  }, 1000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.my-nft-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 720px;
}

.my-nft-wrapper {
  position: relative;

  width: 220px;
  height: 220px;
  background: rgba(253, 239, 230, 0.8);
  border-radius: 8px;
  margin: 10px;
}

.my-nft-price-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-top: 8px;
  margin-left: 8px;

  padding: 4px;

  position: absolute;
  top: 12px;
  left: 12px;
  background-color: white;
  border-radius: 20px;
}

.my-nft-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  position: absolute;
  margin-left: 10px;
  top: 170px;
  border-radius: 8px;
  width: 200px;
  height: 40px;

  background: rgba(216, 148, 60, 0.7);
  backdrop-filter: blur(6.25px);
  border-radius: 0px 0px 8px 8px;

  z-index: 1;
}
.my-nft-claim-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  position: absolute;
  margin-left: 10px;
  top: 170px;
  border-radius: 8px;
  width: 200px;
  height: 40px;

  background: rgba(216, 148, 60, 0.7);
  backdrop-filter: blur(6.25px);
  border-radius: 0px 0px 8px 8px;

  z-index: 1;

  cursor: pointer;
}

.my-website-button {
  background-color: transparent;
  border-color: transparent;

  cursor: pointer;
}

.my-nft-text {
  font-size: 18px;
  color: white;
}
.my-nft-claim-text {
  width: 100%;
  font-size: 18px;
  color: white;
}

.my-arb-img {
  margin: 0px 10px;
  width: 24px;
}

.my-nft-img {
  width: 200px;
  height: 200px;
  margin: 10px;

  border-radius: 8px;
}
</style>
