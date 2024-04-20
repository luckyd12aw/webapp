<template>
  <!-- details -->
  <div class="details">
    <div class="details-head">Welcome to the LuckyDraw!</div>
    <div class="details-sub">
      Grab ongoing draw products at discounted prices now!
    </div>
  </div>
  <!-- nft -->
  <div class="nft-continer">
    <!-- nft-arrow -->
    <button class="arrow-button">
      <svg
        class="arrow-left"
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="30.5"
          cy="30.5"
          r="30.5"
          transform="rotate(-180 30.5 30.5)"
          fill="#FBFCFE"
        />
        <g filter="url(#filter0_d_5_2382)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.8608 43.6651C36.4451 44.0806 35.771 44.0806 35.3552 43.6651L23.31 31.6279C22.8942 31.2124 22.8942 30.5387 23.31 30.1232L35.3552 18.086C35.771 17.6705 36.4451 17.6705 36.8608 18.086C37.2766 18.5015 37.2766 19.1751 36.8608 19.5906L25.5685 30.8756L36.8608 42.1605C37.2766 42.576 37.2766 43.2496 36.8608 43.6651Z"
            fill="#1A1A1A"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5_2382"
            x="18.9982"
            y="17.7744"
            width="22.1745"
            height="34.2024"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5_2382"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_2382"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
    <!-- top -->
    <div class="nft-wrapper">
      <div class="nft-top">
        <div class="nft-price-container">
          <img class="eth-img" src="../assets/eth.png" alt="eth" />
          <div class="nft-price-text">0.1145 ETH</div>
        </div>
        <div class="nft-title-container">
          <img class="arb-img" src="../assets/arb.png" alt="arb" />
          <div class="nft-text">LuckyDraw #3</div>
          <button class="website-button">
            <svg
              width="25"
              height="25"
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
        </div>
        <img class="nft-img" src="../assets/nft.png" alt="nft" />
      </div>
      <!-- mid -->
      <div class="time-text">24h 05m 12s</div>
      <div class="participants-container">
        <div class="participants-text">Participants</div>
        <div class="participants-text">10,001</div>
      </div>
      <!-- bottom -->
      <div class="nft-info">
        <div class="nft-description-name">Genesis Home #3294</div>
        <div class="nft-description">
          The Genesis Homes is the first collection released by ZTX. Each of the
          4,000 unique NFTs is a fully immersive and customizable in-game asset
          and grants membership to one of four District sub-DAOs of the ZTX
          community. Find your home in ZTX!
        </div>
        <div class="nft-info-wrapper">
          <div class="nft-info-title">Price</div>
          <div class="nft-info-details">0.001 ETH</div>
        </div>
        <div class="nft-info-wrapper">
          <div class="nft-info-title">Application period</div>
          <div class="nft-info-details">24.04.15.(Mon) - 24.04.21.(Son)</div>
        </div>
        <div class="nft-info-wrapper">
          <div class="nft-info-title">Announcement date</div>
          <div class="nft-info-details">24.04.22.(Tue)</div>
        </div>
      </div>
      <!-- top -->
      <button class="apply-button">Apply</button>
    </div>
    <!-- nft-arrow -->
    <button class="arrow-button">
      <svg
        class="arrow-right"
        width="63"
        height="63"
        viewBox="0 0 63 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="31.5" cy="31.5" r="31.5" fill="#FBFCFE" />
        <g filter="url(#filter0_d_5_2435)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.9392 17.9032C25.3686 17.4741 26.0649 17.4741 26.4942 17.9032L38.9344 30.3352C39.3638 30.7643 39.3638 31.4601 38.9344 31.8892L26.4942 44.321C26.0649 44.7501 25.3686 44.7501 24.9392 44.321C24.5098 43.8919 24.5098 43.1962 24.9392 42.7671L36.6018 31.1121L24.9392 19.4572C24.5098 19.0281 24.5098 18.3323 24.9392 17.9032Z"
            fill="#1A1A1A"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5_2435"
            x="20.6172"
            y="17.5814"
            width="22.6392"
            height="35.0615"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5_2435"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_2435"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  </div>
  <!-- footer -->
  <div class="footer-images">
    <button class="footer-image-button">
      <svg
        width="18"
        height="18"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9723 9.31543L20.7953 0H18.9415L12.1489 8.08846L6.72367 0H0.466309L8.67033 12.2312L0.466309 22H2.32018L9.49333 13.4582L15.2228 22H21.4802L12.9723 9.31543ZM10.4332 12.339L9.6021 11.121L2.98817 1.42965H5.83561L11.1731 9.251L12.0044 10.4689L18.9425 20.6354H16.095L10.4332 12.339Z"
          fill="black"
        />
      </svg>
    </button>
    <button class="footer-image-button">
      <svg
        width="20"
        viewBox="0 0 27 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.65681 9.58353L17.7384 3.05364C19.3297 2.37381 24.7094 0.19409 24.7094 0.19409C24.7094 0.19409 27.1946 -0.757851 26.9878 1.55468C26.9184 2.50664 26.3662 5.83941 25.814 9.4443L24.0887 20.1252C24.0887 20.1252 23.9501 21.6933 22.7783 21.9617C21.6064 22.2301 19.6724 21.0097 19.327 20.7377C19.0508 20.5337 14.1505 17.4732 12.356 15.9769C11.873 15.5683 11.3208 14.752 12.4254 13.8C14.9097 11.5557 17.8779 8.76717 19.6724 6.9989C20.5008 6.18255 21.3282 4.27772 17.8779 6.59027L8.14282 13.0473C8.14282 13.0473 7.0392 13.7271 4.96861 13.1156C2.89803 12.504 0.482041 11.6867 0.482041 11.6867C0.482041 11.6867 -1.1748 10.6666 1.65493 9.57897L1.65681 9.58353Z"
          fill="black"
        />
      </svg>
    </button>
    <button class="footer-image-button">
      <svg
        width="24"
        viewBox="0 0 27 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5583 1.59122C20.8489 0.837151 19.0445 0.302189 17.1908 0C16.9372 0.436916 16.7076 0.886445 16.5033 1.34671C14.5287 1.06003 12.5209 1.06003 10.5463 1.34671C10.3418 0.886498 10.1123 0.436968 9.85876 0C8.00393 0.304735 6.19819 0.840965 4.48712 1.59516C1.0902 6.43782 0.169346 11.1602 0.629768 15.8156C2.61909 17.2318 4.84571 18.3089 7.21284 19C7.74585 18.3093 8.21749 17.5765 8.62276 16.8094C7.853 16.5323 7.11005 16.1905 6.40249 15.788C6.5887 15.6579 6.77084 15.5237 6.94682 15.3936C9.00563 16.3266 11.2527 16.8103 13.5279 16.8103C15.803 16.8103 18.05 16.3266 20.1088 15.3936C20.2868 15.5336 20.469 15.6676 20.6531 15.788C19.9442 16.1912 19.2 16.5336 18.4288 16.8113C18.8336 17.5781 19.3053 18.3102 19.8388 19C22.2079 18.3117 24.4362 17.2351 26.4259 15.8175C26.9661 10.4188 25.503 5.73982 22.5583 1.59122ZM9.20597 12.9525C7.92292 12.9525 6.86291 11.8306 6.86291 10.4504C6.86291 9.07011 7.88608 7.9383 9.20188 7.9383C10.5177 7.9383 11.5695 9.07011 11.547 10.4504C11.5245 11.8306 10.5136 12.9525 9.20597 12.9525ZM17.8497 12.9525C16.5646 12.9525 15.5087 11.8306 15.5087 10.4504C15.5087 9.07011 16.5319 7.9383 17.8497 7.9383C19.1676 7.9383 20.2111 9.07011 20.1887 10.4504C20.1662 11.8306 19.1573 12.9525 17.8497 12.9525Z"
          fill="black"
        />
      </svg>
    </button>
  </div>
</template>
  
<script setup>
</script>
  
<style>
/* details */
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.details-head,
.details-sub {
  width: 100%;
}

.details-head {
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 4px;
}

.details-sub {
  /* margin-bottom: 20px; */
  margin-bottom: 16px;
}

/* nft-top */
.nft-continer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.nft-wrapper {
  width: 360px;

  background: rgba(253, 239, 230, 0.8);
  border-radius: 8px;
}

.nft-top {
  margin-top: 20px;
  margin-bottom: 10px;

  position: relative;
}

.nft-img {
  width: 320px;
  height: 320px;
  border-radius: 8px;
}

.nft-price-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-left: 20px;

  padding: 4px;

  position: absolute;
  top: 12px;
  left: 12px;
  background-color: white;
  border-radius: 20px;
}

.eth-img {
  margin-left: 4px;
  margin-right: 2px;
  width: 16px;
}

.nft-price-text {
  font-weight: 600;
  font-size: 12px;

  margin-right: 6px;
}

.nft-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  position: absolute;
  margin-left: 20px;
  top: 266px;
  border-radius: 8px;
  width: 320px;
  height: 55px;

  background: rgba(216, 148, 60, 0.7);
  backdrop-filter: blur(6.25px);
  border-radius: 0px 0px 8px 8px;
}

.website-button {
  background-color: transparent;
  border-color: transparent;

  margin-right: 12px;

  cursor: pointer;
}

.nft-text {
  font-size: 22px;
  color: white;
}

.arb-img {
  margin-left: 20px;
  width: 28px;
}

/* nft-mid */
.time-text {
  font-weight: 500;
  font-size: 44px;

  margin-bottom: 10px;
}

.participants-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  padding: 10px 40px 10px 40px;
  background-color: #3a3a3a;

  margin-bottom: 20px;
}

.participants-text {
  font-weight: 200;
  color: white;
}

/* nft-bottom */
.nft-info {
  display: block;
  justify-content: center;
  align-items: center;
  text-align: justify;

  margin: 0px 22px;
}

.nft-description-name {
  font-weight: 700;
  font-size: 14px;

  margin-bottom: 6px;
}

.nft-description {
  font-weight: 200;
  font-size: 12px;

  margin-bottom: 10px;
}

.nft-info-wrapper {
  display: flex;
  font-size: 14px;

  margin-bottom: 6px;
}

.nft-info-title {
  width: 140px;
  font-weight: 700;
}

.nft-info-details {
  font-weight: 200;
  letter-spacing: -0.2px;
}

/* nft-button */
.apply-button {
  width: 200px;
  height: 40px;

  color: white;
  background: #d8943c;
  border-radius: 8px;
  border-color: transparent;

  cursor: pointer;

  margin: 20px 0px;
}

/* arrow */
.arrow-button {
  background-color: transparent;
  border-color: transparent;

  cursor: pointer;
}

.arrow-left {
  width: 56px;
  margin-right: 30px;
}

.arrow-right {
  width: 56px;
  margin-left: 30px;
}

/* footer */
.footer-images {
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.footer-image-button {
  background-color: transparent;
  border-color: transparent;

  cursor: pointer;

  margin-right: 10px;
}

.footer-image-button:last-child {
  margin-right: 0px;
}
</style>
