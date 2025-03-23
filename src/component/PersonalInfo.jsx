import { useEffect, useState } from "react";

function PersonalInfo({ formData, handleChange,  }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await fetch("https://restcountries.com/v3.1/all");
          const data = await response.json();
          const countryNames = data.map((country) => country.name.common).sort();
          setCountries(countryNames);
        
          // console.log(data)
        } catch (error) {
          console.log("fetching countries");
          
        }
      };
      fetchCountries();
    }, []);
  return (
    <div className="space-y-6">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-4">Personal Info</h2>

      {/* Full Name */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          
          className="w-full lg:w-10/12 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Gender */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          name="gender"
         
          className="w-full lg:w-10/12 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focusring-blue-500"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          
          className="w-full lg:w-10/12 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Country */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <select
          name="country"
           value={selectedCountry}
           onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full lg:w-10/12 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Country</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
         
          
        </select>
      </div>

     
    </div>
  );
}

export default PersonalInfo;