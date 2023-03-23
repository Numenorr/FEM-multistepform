import React from "react";

const stepsMobile = ({ currentStep }) => {
  return (
    <div
      className="bg-cover absolute top-0 w-full h-52 md:hidden"
      style={{
        backgroundImage: 'url("../../src/assets/bg-sidebar-mobile.svg")',
      }}
    >
      <div className="flex justify-center gap-x-4 mt-5">
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
    </div>
  );
};

export default stepsMobile;
