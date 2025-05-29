"use client"

import { motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

export function BloodCompatibilityChart() {
  const bloodTypes = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"]

  // Compatibility matrix: [row][column] where row is recipient and column is donor
  const compatibility = {
    "O-": { "O-": true, "O+": false, "A-": false, "A+": false, "B-": false, "B+": false, "AB-": false, "AB+": false },
    "O+": { "O-": true, "O+": true, "A-": false, "A+": false, "B-": false, "B+": false, "AB-": false, "AB+": false },
    "A-": { "O-": true, "O+": false, "A-": true, "A+": false, "B-": false, "B+": false, "AB-": false, "AB+": false },
    "A+": { "O-": true, "O+": true, "A-": true, "A+": true, "B-": false, "B+": false, "AB-": false, "AB+": false },
    "B-": { "O-": true, "O+": false, "A-": false, "A+": false, "B-": true, "B+": false, "AB-": false, "AB+": false },
    "B+": { "O-": true, "O+": true, "A-": false, "A+": false, "B-": true, "B+": true, "AB-": false, "AB+": false },
    "AB-": { "O-": true, "O+": false, "A-": true, "A+": false, "B-": true, "B+": false, "AB-": true, "AB+": false },
    "AB+": { "O-": true, "O+": true, "A-": true, "A+": true, "B-": true, "B+": true, "AB-": true, "AB+": true },
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-3 bg-gray-100 border border-gray-200 text-left">
              <div className="font-bold text-gray-700">
                <div>Recipient</div>
                <div className="text-xs text-gray-500">Can receive from</div>
              </div>
            </th>
            {bloodTypes.map((type) => (
              <th key={type} className="p-3 bg-gray-100 border border-gray-200 text-center">
                <div className="font-bold text-gray-700">{type}</div>
                <div className="text-xs text-gray-500">Donor</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bloodTypes.map((recipient) => (
            <motion.tr
              key={recipient}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <td className="p-3 border border-gray-200 bg-gray-50 font-bold text-gray-700">{recipient}</td>
              {bloodTypes.map((donor) => (
                <td
                  key={`${recipient}-${donor}`}
                  className={`p-3 border border-gray-200 text-center ${
                    compatibility[recipient][donor] ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  {compatibility[recipient][donor] ? (
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600 mx-auto" />
                  )}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
