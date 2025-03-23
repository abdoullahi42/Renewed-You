import { useState } from "react";
import Calendar from "react-calendar";
import Select from "react-select";
import "react-calendar/dist/Calendar.css";

function WorkAvailability() {
  const [date, setDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);
  const [duration, setDuration] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  
  // Disable past dates
  const isDateDisabled = ({ date: currentDate }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today
    return currentDate < today;
  };

  // Get available hours based on the selected date and current time
  const getAvailableHours = () => {
    const now = new Date();
    const selectedDate = new Date(date);
    const hours = [];

    // If the selected date is today, disable past hours
    if (selectedDate.toDateString() === now.toDateString()) {
      const currentHour = now.getHours();
      for (let i = currentHour + 1; i < 24; i++) {
        hours.push(i);
      }
    } else {
      // If the selected date is in the future, all hours are available
      for (let i = 0; i < 24; i++) {
        hours.push(i);
      }
    }

    return hours;
  };

  // Get available minutes
  const getAvailableMinutes = () => {
    return [0, 15, 30, 45]; // 15-minute intervals
  };

  // Format time with leading zeros
  const formatTime = (hour, minute) => {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}`;
  };

  // Calculate end time based on start time and duration
  const calculateEndTime = (startHour, startMinute, durationMinutes) => {
    const startDate = new Date();
    startDate.setHours(startHour, startMinute, 0);
    
    const endDate = new Date(startDate.getTime() + durationMinutes * 60000);
    const endHour = endDate.getHours();
    const endMinute = endDate.getMinutes();
    
    return formatTime(endHour, endMinute);
  };

  // Handle hour selection
  const handleHourClick = (hour) => {
    setSelectedHour(hour);
    setSelectedMinute(null); // Reset minute when hour changes
  };

  // Handle minute selection
  const handleMinuteClick = (minute) => {
    setSelectedMinute(minute);
  };

  // Handle duration change
  const handleDurationChange = (selectedOption) => {
    setDuration(selectedOption);
  };

  // Add a time slot
  const addTimeSlot = () => {
    if (selectedHour === null || selectedMinute === null || !duration) {
      return;
    }
    
    const startTime = formatTime(selectedHour, selectedMinute);
    const endTime = calculateEndTime(selectedHour, selectedMinute, parseInt(duration.value));
    const formattedDate = date.toDateString();
    
    const newTimeSlot = {
      id: Date.now(), // Unique identifier
      date: formattedDate,
      startTime,
      endTime,
      duration: duration.label
    };
    
    setTimeSlots([...timeSlots, newTimeSlot]);
    
    // Reset selections
    setSelectedHour(null);
    setSelectedMinute(null);
  };

  // Remove a time slot
  const removeTimeSlot = (id) => {
    setTimeSlots(timeSlots.filter(slot => slot.id !== id));
  };

  return (
    <div className="space-y-6 p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Work & Availability</h2>

      {/* Time Slots List */}
      {timeSlots.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-700">Your Available Time Slots</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {timeSlots.map((slot) => (
              <div key={slot.id} className="flex items-center justify-between bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div>
                  <p className="font-medium text-gray-800">{slot.date}</p>
                  <p className="text-blue-700">
                    {slot.startTime} - {slot.endTime} ({slot.duration})
                  </p>
                </div>
                <button 
                  onClick={() => removeTimeSlot(slot.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Calendar for Date Selection */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Select Date</label>
        <Calendar
          onChange={setDate}
          value={date}
          tileDisabled={isDateDisabled}
          className="border border-gray-300 rounded-lg p-2 shadow-sm"
        />
      </div>

      {/* Time selection section */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Select Start Time</label>
        
        {/* Hour selection */}
        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Hour</label>
          <div className="grid grid-cols-6 gap-2 max-h-40 overflow-y-auto p-2 border border-gray-300 rounded-lg shadow-sm">
            {getAvailableHours().map((hour) => (
              <div
                key={hour}
                className={`p-2 text-center rounded-lg cursor-pointer transition-colors ${
                  selectedHour === hour
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-blue-100 text-gray-700"
                }`}
                onClick={() => handleHourClick(hour)}
              >
                {hour.toString().padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
        
        {/* Minute selection - only show if an hour is selected */}
        {selectedHour !== null && (
          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Minute</label>
            <div className="flex justify-center gap-2 p-2 border border-gray-300 rounded-lg shadow-sm">
              {getAvailableMinutes().map((minute) => (
                <div
                  key={minute}
                  className={`p-2 w-16 text-center rounded-lg cursor-pointer transition-colors ${
                    selectedMinute === minute
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-blue-100 text-gray-700"
                  }`}
                  onClick={() => handleMinuteClick(minute)}
                >
                  {minute.toString().padStart(2, '0')}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Session Duration Dropdown */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Session Duration</label>
        <Select
          options={[
            { value: "30", label: "30 minutes" },
            { value: "45", label: "45 minutes" },
            { value: "60", label: "60 minutes" },
            { value: "90", label: "90 minutes" },
            { value: "120", label: "2 hours" },
          ]}
          value={duration}
          onChange={handleDurationChange}
          placeholder="Select Session Duration"
          className="w-full"
        />
      </div>

      {/* Add Time Slot Button */}
      <button
        type="button"
        disabled={selectedHour === null || selectedMinute === null || !duration}
        onClick={addTimeSlot}
        className={`w-full p-3 rounded-lg font-medium text-white ${
          selectedHour !== null && selectedMinute !== null && duration
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Add Time Slot
      </button>

      {/* Time Zone Dropdown */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Time Zone</label>
        <Select
          options={[
            { value: "GMT", label: "GMT" },
            { value: "EST", label: "EST (GMT-5)" },
            { value: "CST", label: "CST (GMT-6)" },
            { value: "MST", label: "MST (GMT-7)" },
            { value: "PST", label: "PST (GMT-8)" },
          ]}
          placeholder="Select Time Zone"
          className="w-full"
        />
      </div>

      {/* Preferred Meeting Points */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Preferred Meeting Points</label>
        <Select
          options={[
            { value: "google-meet", label: "Google Meet" },
            { value: "zoom", label: "Zoom" },
            { value: "microsoft-teams", label: "Microsoft Teams" },
          ]}
          isMulti
          placeholder="Select preferred meeting points"
          className="w-full"
        />
      </div>

      {/* Emergency Availability Toggle */}
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="emergencyAvailability"
            className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Available for emergency sessions</span>
        </label>
      </div>
      
      {/* Save Button */}
      <button
        type="button"
        disabled={timeSlots.length === 0}
        className={`w-full p-3 rounded-lg font-medium text-white ${
          timeSlots.length > 0 ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Save Availability
      </button>
    </div>
  );
}

export default WorkAvailability;