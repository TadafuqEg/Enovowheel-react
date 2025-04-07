import React, { useState } from "react";

const countries = [
  {
    code: "ae",
    name: "United Arab Emirates",
    dial: "+971",
    flag: "../../Puplic/assets/ae.png",
  },
  {
    code: "eg",
    name: "Egypt",
    dial: "+20",
    flag: "../../Puplic/assets/eg.png",
  },
  {
    code: "sa",
    name: "Saudi Arabia",
    dial: "+966",
    flag: "../../Puplic/assets/img30.png",
  },
  {
    code: "us",
    name: "United States",
    dial: "+1",
    flag: "../../Puplic/assets/us.png",
  }

];

const From: React.FC = () => {
  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (country: any) => {
    setSelected(country);
    setOpen(false);
  };

  return (
    <section className="formm text-white md:px-20 flex flex-col md:flex-row items-start justify-between gap-12">
      {/* Left Text */}
      <div className="form-left">
        <h2 className="">
          WE ARE HAPPY TO HELP
        </h2>
        <p className="">
          For General Inquiries, Or To Get Information About Our Products,
          Services, Warranties, Or For Sales Or Media-Related Questions, Please
          Leave Your Contact Information Below, And We Will Get Back To You As
          Soon As Possible.
        </p>
      </div>

      {/* Right Form */}
      <div className="form space-y-6">
        {/* Names */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="inputs w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="inputs w-full"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="E-mail"
          className="inputs w-full"
        />

        {/* Custom phone with country flag */}
        <div className="flex gap-2 relative">
          {/* Custom Dropdown */}
          <div className="relative w-28">
            <div
              className="select-flags bg-[#101010] text-white text-sm p-2 rounded-md border border-gray-800 flex items-center justify-between cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <img
                src={selected.flag}
                alt={selected.code}
                className="w-5 h-5 mr-2"
              />
              {selected.dial}
              <svg
                className="w-4 h-4 ml-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {open && (
              <ul className="absolute z-10 mt-1 w-full bg-[#101010] border border-gray-700 rounded-md max-h-48 overflow-y-auto shadow-xl">
                {countries.map((country) => (
                  <li
                    key={country.code}
                    className="flex items-center gap-2 px-2 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleSelect(country)}
                  >
                    <img src={country.flag} alt={country.code} className="w-5 h-5" />
                    {country.dial}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="flex-1 p-3 bg-[#101010] rounded-md border border-gray-800 text-white placeholder-gray-500"
          />
        </div>

        {/* Message */}
        <textarea
          rows={5}
          placeholder="Message"
          className="text-area w-full"
        />

        {/* Submit */}
        <button className="send w-full text-center border border-teal-500 relative overflow-hidden hover:bg-teal-500 hover:text-black transition-all duration-300 shadow-[0_0_12px_#11696B]">
          SEND MESSAGE
        </button>
      </div>
    </section>
  );
};

export default From;
