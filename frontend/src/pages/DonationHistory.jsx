"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import {
  Activity,
  Calendar,
  TrendingUp,
  Clock,
  Droplets,
  User,
  MapPin,
  AlertCircle,
  CheckCircle,
  BarChart3,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Header from "./header/header"
import Footer from "./footer/footer"

const DonationHistory = () => {
  const [donations, setDonations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const userjson = localStorage.getItem("user")
  const user = userjson ? JSON.parse(userjson) : null

  useEffect(() => {
    const fetchDonation = async () => {
      if (!user) {
        setError("User not logged in")
        setLoading(false)
        return
      }
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/DonationHistory", user)
        setDonations(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch donation history", err.response?.data)
        setError("Failed to fetch donation history")
        setLoading(false)
      }
    }
    fetchDonation()
  }, [])

  const calculateStats = (donations) => {
    if (donations.length === 0) return { totalDonations: 0, averageInterval: 0, nextEligibleDate: "" }

    const totalDonations = donations.length

    const dates = donations.map((donation) => new Date(donation.DonationDate)).sort((a, b) => a - b)
    const intervals = dates.slice(1).map((date, i) => (date - dates[i]) / (1000 * 60 * 60 * 24))

    const averageInterval = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length

    const lastDonationDate = dates[dates.length - 1]
    const nextEligibleDate = new Date(lastDonationDate)
    nextEligibleDate.setDate(nextEligibleDate.getDate() + 56)

    return {
      totalDonations,
      averageInterval: Math.round(averageInterval),
      nextEligibleDate: nextEligibleDate.toISOString().split("T")[0],
    }
  }

  const donationStats = calculateStats(donations)

  const StatCard = ({ label, value, helpText, icon, delay = 0 }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
      <Card className="!relative !bg-white !border-2 !border-slate-200 hover:!border-red-300 !transition-all !duration-300 hover:!shadow-lg !overflow-hidden">
        <div className="!absolute !top-0 !right-0 !w-16 !h-16 !bg-gradient-to-br !from-red-100 !to-red-200 !opacity-50 !transform !rotate-45 !translate-x-8 !-translate-y-8" />
        <CardHeader className="!pb-3">
          <CardTitle className="!flex !items-center !gap-3 !text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">
            <div className="!w-8 !h-8 !bg-red-100 !flex !items-center !justify-center !rounded-full">{icon}</div>
            {label}
          </CardTitle>
        </CardHeader>
        <CardContent className="!pt-0">
          <div className="!text-2xl !font-bold !text-slate-900 !mb-2">{value}</div>
          {helpText && <div className="!text-sm !text-slate-600 !leading-relaxed">{helpText}</div>}
        </CardContent>
      </Card>
    </motion.div>
  )

  if (loading) {
    return (
      <>
        <Header />
        <div className="!min-h-screen !bg-white !flex !items-center !justify-center">
          <div className="!text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="!w-12 !h-12 !border-4 !border-red-200 !border-t-red-600 !rounded-full !mx-auto !mb-4"
            />
            <div className="!text-lg !font-semibold !text-slate-700">Loading donation history...</div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="!min-h-screen !bg-white !relative !overflow-hidden">
        {/* Professional background pattern */}
        <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

        {/* Creative geometric elements */}
        <div className="!absolute !top-20 !left-20 !w-1 !h-32 !bg-red-200 !transform !rotate-12" />
        <div className="!absolute !top-40 !right-40 !w-2 !h-24 !bg-slate-200 !transform !-rotate-12" />
        <div className="!absolute !bottom-40 !left-40 !w-1 !h-28 !bg-red-100 !transform !rotate-45" />

        <div className="!container !mx-auto !px-6 lg:!px-8 !relative !z-10 !py-20">
          {/* Professional Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="!mb-12"
          >
            <div className="!flex !items-center !gap-3 !mb-6">
              <div className="!w-1 !h-8 !bg-red-600" />
              <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">
                Personal Health Dashboard
              </span>
            </div>
            <h1 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight">
              Donation History
            </h1>
            <p className="!text-lg !text-slate-600 !max-w-2xl">
              Track your blood donation journey and view comprehensive statistics about your life-saving contributions.
            </p>
          </motion.div>

          {/* Statistics Cards */}
          <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8 !mb-12">
            <StatCard
              label="Total Donations"
              value={donationStats.totalDonations}
              helpText={`Last donation: ${donations.length > 0 ? new Date(donations[donations.length - 1].DonationDate).toLocaleDateString() : "N/A"}`}
              icon={<Droplets className="!h-4 !w-4 !text-red-600" />}
              delay={0}
            />
            <StatCard
              label="Average Donation Interval (days)"
              value={donationStats.averageInterval}
              helpText="Based on your donation history"
              icon={<TrendingUp className="!h-4 !w-4 !text-red-600" />}
              delay={0.1}
            />
            <StatCard
              label="Eligible for Next Donation"
              value={donationStats.nextEligibleDate}
              helpText="Based on your last donation"
              icon={<Calendar className="!h-4 !w-4 !text-red-600" />}
              delay={0.2}
            />
          </div>

          {/* Donation History Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="!relative !bg-white !border-2 !border-slate-200 !overflow-hidden !shadow-xl">
              {/* Professional table header */}
              <div className="!relative !bg-gradient-to-r !from-red-600 !to-red-700 !p-6 !transform !-skew-y-1 !-mt-1 !mb-6">
                <div className="!transform !skew-y-1">
                  <div className="!flex !items-center !gap-4">
                    <div className="!w-12 !h-12 !bg-white/20 !backdrop-blur-sm !flex !items-center !justify-center !rounded-full">
                      <BarChart3 className="!h-6 !w-6 !text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="!text-sm !font-medium !text-white/90 !uppercase !tracking-wider">
                        Donation Records
                      </p>
                      <h2 className="!text-xl !font-bold !text-white">Complete History Overview</h2>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="!px-8 !pb-8">
                {donations.length > 0 ? (
                  <div className="!overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="!border-slate-200">
                          <TableHead className="!text-slate-700 !font-semibold">
                            <div className="!flex !items-center !gap-2">
                              <Activity className="!h-4 !w-4 !text-red-600" />
                              Donation ID
                            </div>
                          </TableHead>
                          <TableHead className="!text-slate-700 !font-semibold">
                            <div className="!flex !items-center !gap-2">
                              <Calendar className="!h-4 !w-4 !text-red-600" />
                              Date of Donation
                            </div>
                          </TableHead>
                          <TableHead className="!text-slate-700 !font-semibold">
                            <div className="!flex !items-center !gap-2">
                              <Droplets className="!h-4 !w-4 !text-red-600" />
                              Quantity Donated
                            </div>
                          </TableHead>
                          <TableHead className="!text-slate-700 !font-semibold">
                            <div className="!flex !items-center !gap-2">
                              <MapPin className="!h-4 !w-4 !text-red-600" />
                              Blood Camp ID
                            </div>
                          </TableHead>
                          <TableHead className="!text-slate-700 !font-semibold">
                            <div className="!flex !items-center !gap-2">
                              <User className="!h-4 !w-4 !text-red-600" />
                              Staff CIN
                            </div>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {donations.map((donation, index) => (
                          <motion.tr
                            key={donation.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="!border-slate-200 hover:!bg-red-50 !transition-colors !duration-200"
                          >
                            <TableCell className="!font-medium !text-slate-900">
                              <div className="!flex !items-center !gap-2">
                                <div className="!w-2 !h-2 !bg-red-500 !rounded-full" />
                                {donation.id}
                              </div>
                            </TableCell>
                            <TableCell className="!text-slate-700">
                              {new Date(donation.DonationDate).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="!text-slate-700">
                              <div className="!flex !items-center !gap-2">
                                <span className="!font-semibold !text-red-600">{donation.QuantityDonated}</span>
                                <span className="!text-sm !text-slate-500">units</span>
                              </div>
                            </TableCell>
                            <TableCell className="!text-slate-700">{donation.blood_camp_id}</TableCell>
                            <TableCell className="!text-slate-700">{donation.bloodcampstaff_cin}</TableCell>
                          </motion.tr>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="!text-center !py-12">
                    <div className="!w-16 !h-16 !bg-red-100 !flex !items-center !justify-center !mx-auto !mb-4 !rounded-full">
                      <AlertCircle className="!h-8 !w-8 !text-red-600" />
                    </div>
                    <h3 className="!text-lg !font-semibold !text-slate-900 !mb-2">No Donation History</h3>
                    <p className="!text-slate-600">
                      You haven't made any donations yet. Start your life-saving journey today!
                    </p>
                  </div>
                )}
              </CardContent>

              {/* Professional Footer */}
              <div className="!border-t !border-slate-200 !bg-red-50 !py-4 !px-8">
                <div className="!flex !items-center !justify-between">
                  <div className="!flex !items-center !gap-2">
                    <CheckCircle className="!h-4 !w-4 !text-green-600" />
                    <span className="!text-xs !text-slate-600">Verified Medical Records</span>
                  </div>
                  <div className="!flex !items-center !gap-2">
                    <Clock className="!h-4 !w-4 !text-red-600" />
                    <span className="!text-xs !text-slate-600">Updated in Real-time</span>
                  </div>
                </div>
              </div>

              {/* Creative corner accent */}
              <div className="!absolute !top-0 !right-0 !w-16 !h-16 !bg-gradient-to-br !from-red-300 !to-red-400 !opacity-20 !transform !rotate-45 !translate-x-8 !-translate-y-8" />
            </Card>
          </motion.div>

          {/* Professional Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="!mt-12 !text-center"
          >
            <div className="!bg-red-50 !border !border-red-200 !p-8 !rounded-lg">
              <div className="!flex !items-center !justify-center !gap-3 !mb-4">
                <div className="!w-12 !h-12 !bg-red-600 !flex !items-center !justify-center !rounded-full">
                  <Activity className="!h-6 !w-6 !text-white" />
                </div>
                <h3 className="!text-xl !font-bold !text-slate-900">Your Impact</h3>
              </div>
              <p className="!text-slate-700 !mb-4">
                With <span className="!font-bold !text-red-600">{donationStats.totalDonations}</span> donations, you've
                potentially saved up to{" "}
                <span className="!font-bold !text-red-600">{donationStats.totalDonations * 3}</span> lives.
              </p>
              <p className="!text-sm !text-slate-600">
                Each blood donation can save up to 3 lives. Thank you for being a life-saving hero!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DonationHistory
