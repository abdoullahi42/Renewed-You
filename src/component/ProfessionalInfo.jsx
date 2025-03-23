

function ProfessionalInfo({ formData}) {
  // List of specializations (you can expand this list as needed)
  const specializations = [
    "Anxiety",
    "Depression",
    "Stress Management",
    "Trauma",
    "Relationship Issues",
    "Self-Esteem",
    "Addiction",
    "Other",
  ];

  return (
    <div className="space-y-6">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-4">Professional Info</h2>

      {/* License Number */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">License Number</label>
        <input
          type="text"
          name="licenseNumber"
          placeholder="Enter your license number"
          // value={formData.licenseNumber}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Years of Experience */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
        <input
          type="number"
          name="yearsOfExperience"
          placeholder="Enter years of experience"
          maxLength={2}
          // value={formData.yearsOfExperience}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Specialization */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Specialization</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specializations.map((specialization) => (
            <label key={specialization} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="specialization"
                // value={specialization}
                // checked={formData.specialization.includes(specialization)}
                // onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span>{specialization}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      
    </div>
  );
}

export default ProfessionalInfo;