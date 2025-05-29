// DonorView.js
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, Button, PlusIcon } from './CardComponent'; // Adjust the import path based on your file structure

const DonorView = () => {
  // Static data could be replaced by dynamic data from an API
  const donationData = [
    { date: '2024-01-20', location: 'City Blood Bank', amount: '450ml' },
    { date: '2023-11-12', location: 'Downtown Health Clinic', amount: '500ml' },
    { date: '2023-08-05', location: 'Central Hospital', amount: '500ml' },
  ];

  const campData = [
    { date: '2024-02-15', location: 'Central Park', contact: 'Jane Doe' },
    { date: '2024-03-20', location: 'Beachside Community Center', contact: 'John Smith' },
  ];

  const hospitalData = [
    { name: 'City Hospital', location: 'New York', contact: '123-456-7890' },
    { name: 'General Hospital', location: 'Los Angeles', contact: '987-654-3210' },
  ];

  return (
    <div className="flex flex-col w-full space-y-4 p-4">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Donation History Card */}
        <Card>
          <CardHeader>
            <CardTitle>My Donations</CardTitle>
            <Button className="ml-auto" size="icon">
              <PlusIcon className="h-5 w-5 text-blue-500" />
              <span className="sr-only">Add Donation</span>
            </Button>
          </CardHeader>
          <CardContent>
            {/* Donation History Table */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {donationData.map((donation, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap">{donation.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{donation.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">{donation.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Upcoming Camps Card */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Camps</CardTitle>
            <Button className="ml-auto" size="icon">
              <PlusIcon className="h-5 w-5 text-blue-500" />
              <span className="sr-only">Add Camp</span>
            </Button>
          </CardHeader>
          <CardContent>
            {/* Camps Table */}
            {/* Similar structure to the Donations Table with campData */}
          </CardContent>
        </Card>
      </div>

      {/* Hospitals Card */}
      <Card>
        <CardHeader>
          <CardTitle>Hospitals</CardTitle>
          <Button className="ml-auto" size="icon">
            <PlusIcon className="h-5 w-5 text-blue-500" />
            <span className="sr-only">Add Hospital</span>
          </Button>
        </CardHeader>
        <CardContent>
          {/* Hospitals Table */}
          {/* Similar structure to the Donations Table with hospitalData */}
        </CardContent>
      </Card>
    </div>
  );
};

export default DonorView;
