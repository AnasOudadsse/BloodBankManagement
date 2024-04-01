// Example mock data for the dashboard
export const bloodStock = {
    APositive: 25,
    ANegative: 10,
    BPositive: 20,
    BNegative: 5,
    OPositive: 80,
    ONegative: 15,
    ABPositive: 10,
    ABNegative: 5,
  };
  
  export const recentDonations = [
    { id: 1, name: "John Doe", type: "APositive", date: "2024-03-25" },
    { id: 2, name: "Jane Smith", type: "BNegative", date: "2024-03-24" },
    // Add more donations...
  ];
  
  export const pendingRequests = [
    { id: 1, patientName: "Alice Johnson", type: "OPositive", urgency: "High" },
    { id: 2, patientName: "Bob Brown", type: "ANegative", urgency: "Medium" },
    // Add more requests...
  ];
  