import React, { useState, useEffect } from "react";
import axios from "axios";
import Cities from './MoroccanCities.json'
export function SendNotificationForm() {
  const [criteria, setCriteria] = useState({
    bloodTypes: [],
    cities: [],
  });
  const [selectedCriteria, setSelectedCriteria] = useState({
    bloodType: "",
    city: "",
  });
  const [notificationData, setNotificationData] = useState({
    title: '',
    message: '',
  });

  useEffect(() => {
    // Fetch criteria for blood types and cities
    const fetchCriteria = async () => {
      try {
        // Adjust URLs to your API endpoints
        const BloodTypes = await axios.get("http://127.0.0.1:8000/api/bloodTypes");
        setCriteria({
          bloodTypes: BloodTypes.data,
          cities: Cities.data,
        });
      } catch (error) {
        console.error("Failed to fetch criteria", error);
      }
    };
    fetchCriteria();
  }, []);

  const handleCriteriaChange = (e) => {
    const { name, value } = e.target;
    setSelectedCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotificationData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust URL to your API endpoint
      await axios.post("http://127.0.0.1:8000/api/addNotification", {
        ...selectedCriteria,
        notificationData,
      });
      console.log("Notification sent successfully");
      // Reset form or give feedback to the user
    } catch (error) {
      console.error("Failed to send notification", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Send Alert Notification</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">
            Blood Type
          </label>
          <select
            id="bloodType"
            name="bloodType"
            value={selectedCriteria.bloodType}
            onChange={handleCriteriaChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Blood Type</option>
            {criteria.bloodTypes.map((type) => (
              <option key={type.id} value={type.BloodType}>
                {type.BloodType}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <select
            id="city"
            name="city"
            value={selectedCriteria.city}
            onChange={handleCriteriaChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select City</option>
            {criteria.cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
        <input
          className="p-3 md:p-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="title"
            type="text"
            name="title"
            value={notificationData.title}
            onChange={handleChange}
            required
            placeholder="Notification Title"
        />

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={notificationData.message}
            onChange={handleChange }
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Type your notification message here"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Notification
        </button>
      </form>
    </div>
  );
}
