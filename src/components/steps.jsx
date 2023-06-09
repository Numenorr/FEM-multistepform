import React from "react";

const steps = ({ currentStep }) => {
  return (
    <div className="md:p-4 hidden md:block">
      <div className="absolute md:p-10 flex gap-x-4 md:gap-x-0 md:flex-col gap-y-6">
        <div className="flex flex-row align-middle gap-x-5 text-left">
          <div>
            {currentStep === 0 ? (
              <p className="grid place-content-center h-10 w-10 text-Marineblue font-bold border p-3 rounded-full bg-Pastelblue">
                1
              </p>
            ) : (
              <p className="grid place-content-center h-10 w-10 text-white border p-3 rounded-full">
                1
              </p>
            )}
          </div>
          <div className="hidden md:block">
            <p className="text-slate-400 uppercase text-sm">step 1</p>
            <h2 className="text-gray-100 font-bold text-md tracking-wide uppercase">
              Your Info
            </h2>
          </div>
        </div>
        <div className="flex flex-row align-middle gap-x-5 text-left">
          <div>
            {currentStep === 1 ? (
              <p className="grid place-content-center h-10 w-10 text-Marineblue font-bold border p-3 rounded-full bg-Pastelblue">
                2
              </p>
            ) : (
              <p className="grid place-content-center h-10 w-10 text-white border p-3 rounded-full">
                2
              </p>
            )}
          </div>
          <div className="hidden md:block">
            <p className="text-slate-400 uppercase text-sm">step 2</p>
            <h2 className="text-gray-100 font-bold text-md tracking-wide uppercase">
              Select Plan
            </h2>
          </div>
        </div>
        <div className="flex flex-row align-middle gap-x-5 text-left">
          <div>
            {currentStep === 2 ? (
              <p className="grid place-content-center h-10 w-10 text-Marineblue font-bold border p-3 rounded-full bg-Pastelblue">
                3
              </p>
            ) : (
              <p className="grid place-content-center h-10 w-10 text-white border p-3 rounded-full">
                3
              </p>
            )}
          </div>
          <div className="hidden md:block">
            <p className="text-slate-400 uppercase text-sm">step 3</p>
            <h2 className="text-gray-100 font-bold text-md tracking-wide uppercase">
              Add-ons
            </h2>
          </div>
        </div>
        <div className="flex flex-row align-middle gap-x-5 text-left">
          <div>
            {currentStep === 3 ? (
              <p className="grid place-content-center h-10 w-10 text-Marineblue font-bold border p-3 rounded-full bg-Pastelblue">
                4
              </p>
            ) : (
              <p className="grid place-content-center h-10 w-10 text-white border p-3 rounded-full">
                4
              </p>
            )}
          </div>
          <div className="hidden md:block">
            <p className="text-slate-400 uppercase text-sm">step 4</p>
            <h2 className="text-gray-100 font-bold text-md tracking-wide uppercase">
              Summary
            </h2>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="274"
          height="568"
          fill="none"
          viewBox="0 0 274 568"
        >
          <rect
            width="274"
            height="568"
            fill="#483EFF"
            rx="10"
          />
          <mask
            id="a"
            width="274"
            height="568"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
          >
            <rect
              width="274"
              height="568"
              fill="#fff"
              rx="10"
            />
          </mask>
          <g mask="url(#a)">
            <path
              fill="#6259FF"
              fill-rule="evenodd"
              d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z"
              clip-rule="evenodd"
            />
            <path
              fill="#F9818E"
              fill-rule="evenodd"
              d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z"
              clip-rule="evenodd"
            />
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="5"
              d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"
            />
            <path
              fill="#FFAF7E"
              d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default steps;
