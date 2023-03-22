import React from "react";

const addonsForm = ({ data, updateForm }) => {
  return (
    <div className="flex flex-col gap-10 text-left py-10 px-16">
      <div>
        <h1 className="text-4xl font-bold text-Marineblue">Pick add-ons</h1>
        <p className="text-gray-500 mt-2">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <ul className="flex flex-col w-full gap-6">
        <li>
          <input
            type="checkbox"
            id="onlineServ"
            className="w-4 h-4 peer absolute my-9 ml-5 text-Purplishblue border-gray-300 rounded focus:ring-Purplishblue"
            name="addons"
            value="onlineServ"
          />
          <label
            for="onlineServ"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-Purplishblue peer-checked:bg-gray-100 peer-checked:border-Purplishblue"
          >
            <div className="ml-10">
              <p className="text-Marineblue font-bold">Online services</p>
              <p className="text-sm text-gray-400">
                Acesses to multiplayer games
              </p>
            </div>
            <p className="text-Purplishblue">+$1/mo</p>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="extraStorage"
            className="w-4 h-4 peer absolute my-9 ml-5 text-Purplishblue border-gray-300 rounded focus:ring-Purplishblue"
            name="addons"
            value="extraStorage"
          />
          <label
            for="extraStorage"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-Purplishblue peer-checked:bg-gray-100 peer-checked:border-Purplishblue"
          >
            <div className="ml-10">
              <p className="text-Marineblue font-bold">Larger storage</p>
              <p className="text-sm text-gray-400">Extra 1TB of cloud save</p>
            </div>
            <p className="text-Purplishblue">+$2/mo</p>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="customTheme"
            className="w-4 h-4 peer absolute my-9 ml-5 text-Purplishblue border-gray-300 rounded focus:ring-Purplishblue"
            name="addons"
            value="customTheme"
          />
          <label
            for="customTheme"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-Purplishblue peer-checked:bg-gray-100 peer-checked:border-Purplishblue"
          >
            <div className="ml-10">
              <p className="text-Marineblue font-bold">Customizable Profile</p>
              <p className="text-sm text-gray-400">
                Custom theme on your profile
              </p>
            </div>
            <p className="text-Purplishblue">+$2/mo</p>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default addonsForm;
