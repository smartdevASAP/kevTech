import React from "react";
const Inspiration = () => {
  return (
    <>
      <div class="flex flex-col md:flex-row mt-10 items-center justify-around text-sm border border-gray-300 rounded-md m-2 max-w-5xl w-full bg-white">
        <div class="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
          <h2 class="md:text-4xl text-2xl font-semibold text-gray-800">
            Download Mobile App
          </h2>
          <p class="text-gray-700 mt-2 w-3/4">
            Mobile banking app for iOS & Android to manage your online money.
          </p>

          <div class="flex items-center gap-4 mt-6">
            <button
              aria-label="googlePlayBtn"
              class="active:scale-95 transition-all"
              type="button"
            >
              <img
                class="md:w-44 w-28"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
                alt="googlePlayBtn"
              />
            </button>
            <button
              aria-label="appleStoreBtn"
              class="active:scale-95 transition-all"
              type="button"
            >
              <img
                class="md:w-44 w-28"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
                alt="appleStoreBtn"
              />
            </button>
          </div>
        </div>

        <img
          class="max-w-[375px] pt-10 md:p-0"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png"
          alt="excitedWomenImage"
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-sm px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-primary text-white">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-[40px]">Stay Inspired</h1>
          <p className="text-sm md:text-base text-white mt-2 max-w-xl">
            Join our newsletter and be the first to discover new updates,
            exclusive offers, and inspiration.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
            placeholder="Enter your email"
          />
          <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
            Subscribe
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
        <p className="text-white mt-6 text-xs text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>
      </div>
    </>
  );
};

export default Inspiration;
