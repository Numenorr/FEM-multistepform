import React from "react";

const infoForm = ({ data, updateForm }) => {
  return (
    <div className="flex flex-col gap-10 text-left py-10 px-16">
      <div>
        <h1 className="text-4xl font-bold text-Marineblue">Personal info</h1>
        <p className="text-gray-500 mt-2">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="">
        <label className="text-Marineblue font-medium block">Name</label>
        <input
          className="bg-slate-50 p-3 border w-full rounded-lg border-gray-400 text-Marineblue placeholder:text-gray-300 focus:ring-Purplishblue focus:border-Purplishblue"
          type="text"
          placeholder="e.g Stephen King"
          value={data.name || ""}
          onChange={(e) => updateForm("name", e.target.value)}
        />
      </div>
      <div>
        <label className="text-Marineblue font-medium block">
          Email Address
        </label>
        <input
          className="bg-slate-50 p-3 border w-full peer rounded-lg border-gray-400 text-Marineblue placeholder:text-gray-300 focus:ring-Purplishblue focus:border-Purplishblue  invalid:border-Strawberryred"
          type="email"
          placeholder="e.g stephenking@lorem.com"
          value={data.email}
          onChange={(e) => updateForm("email", e.target.value)}
        />
        <p class="mt-2 hidden peer-invalid:block text-Strawberryred text-sm font-bold">
          Please enter a valid email address.
        </p>
      </div>
      <div>
        <label className="text-Marineblue font-medium block">
          Phone Number
        </label>
        <input
          className="bg-slate-50 p-3 border peer w-full rounded-lg border-gray-400 text-Marineblue placeholder:text-gray-300 focus:ring-Purplishblue focus:border-Purplishblue invalid:border-Strawberryred"
          type="tel"
          placeholder="e.g +1 234 567 890"
          pattern="[+][0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}"
          value={data.phone}
          onChange={(e) => updateForm("phone", e.target.value)}
        />
        <p class="mt-2 hidden peer-invalid:block text-Strawberryred text-sm font-bold">
          Please enter a valid phone address.
        </p>
      </div>
    </div>
  );
};

export default infoForm;
