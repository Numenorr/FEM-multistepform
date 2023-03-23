import React from "react";

const summaryForm = () => {
  return (
    <div className="flex flex-col gap-10 text-left py-10 px-6 md:px-16">
      <div>
        <h1 className="text-4xl font-bold text-Marineblue">Finishing up</h1>
        <p className="text-gray-500 mt-2">
          Double-check everything looks OK before continuing.
        </p>
      </div>
      <div className="flex flex-col bg-slate-100 rounded-lg">
        <div className="flex items-center justify-between p-5">
          <div>
            <p className="text-Marineblue font-medium text-xl">
              Arcade (Monthly)
            </p>
            <a
              href="#"
              className="underline text-Purplishblue"
            >
              Change
            </a>
          </div>
          <p className="text-Marineblue font-bold text-lg">$9/mo</p>
        </div>
        <span className="border-b-2 border-gray-200 mx-5"></span>
        <div className="flex justify-between p-5">
          <p className="text-gray-400 font-medium">Online service</p>
          <p className="text-Marineblue font-medium">+$1/mo</p>
        </div>
        <div className="flex justify-between p-5 -mt-5">
          <p className="text-gray-400 font-medium">Larger storage</p>
          <p className="text-Marineblue font-medium">+$2/mo</p>
        </div>
      </div>
      <div className="flex justify-between px-5">
        <p className="text-gray-400 font-medium">Total (per month)</p>
        <p className="text-Purplishblue font-bold text-xl">+$12/mo</p>
      </div>
    </div>
  );
};

export default summaryForm;
