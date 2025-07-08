"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import axios from "axios"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Heart, Users, Clock, Moon, Sun, TrendingUp, Calendar, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import Footer from "./footer/footer"
import { useToast } from "@/hooks/use-toast"

const Dashboard = () => {
  const [colorMode, setColorMode] = useState("light")
  const [stats, setStats] = useState({
    QuantityDonated: 0,
    QuantityDistributed: 0,
    TotalDonors: 0,
    PendingRequests: 0,
    QuantityAvailable: 0,
    recentDonations: null,
  })

  const { toast } = useToast()

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light")
  }

  const BloodStock = {
    APositive: stats.APositive || 0,
    ANegative: stats.ANegative || 0,
    BPositive: stats.BPositive || 0,
    BNegative: stats.BNegative || 0,
    OPositive: stats.OPositive || 0,
    ONegative: stats.ONegative || 0,
    ABPositive: stats.ABPositive || 0,
    ABNegative: stats.ABNegative || 0,
  }

  const recentDonations = stats.recentDonations
  const activeBloodCamps = stats.activeBloodCamps
  const chartData = Object.entries(BloodStock).map(([type, units]) => ({ type, units }))

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/dashboard")
      .then((response) => {
        setStats(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Failed to fetch dashboard data", error)
        toast({
          title: "Error",
          description: "Failed to fetch dashboard data",
          variant: "destructive",
          duration: 5000,
        })
      })
  }, [])

  const StatCard = ({ icon: Icon, label, value }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="!bg-white !border-2 !border-red-100 hover:!border-red-200 !transition-all !duration-300 hover:!shadow-lg">
        <CardContent className="!p-6">
          <div className="!flex !items-center !gap-4">
            <div className="!w-12 !h-12 !bg-red-100 !flex !items-center !justify-center !rounded-full">
              <Icon className="!h-6 !w-6 !text-red-600" />
            </div>
            <div>
              <p className="!text-2xl !font-bold !text-gray-900">{value.toLocaleString()}</p>
              <p className="!text-sm !text-gray-600">{label}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <>
      <Header />
      <div className="!min-h-screen !bg-gray-50 !relative !overflow-hidden">
        {/* Professional background pattern */}
        <div className="!absolute !inset-0 !bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] !bg-[size:2rem_2rem] !opacity-40" />

        {/* Creative geometric elements */}
        <div className="!absolute !top-20 !left-20 !w-1 !h-32 !bg-red-200 !transform !rotate-12" />
        <div className="!absolute !top-40 !right-40 !w-2 !h-24 !bg-red-100 !transform !-rotate-12" />
        <div className="!absolute !bottom-40 !left-40 !w-1 !h-28 !bg-red-200 !transform !rotate-45" />

        <div className="!container !mx-auto !px-6 lg:!px-8 !relative !z-10 !py-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="!flex !justify-between !items-center !mb-8"
          >
            <div>
              <div className="!flex !items-center !gap-3 !mb-2">
                <div className="!w-1 !h-8 !bg-red-600" />
                <span className="!text-sm !font-semibold !text-gray-600 !uppercase !tracking-wider">
                  Blood Bank Management
                </span>
              </div>
              <h1 className="!text-4xl !font-bold !text-gray-900 !tracking-tight">Dashboard Overview</h1>
            </div>
            <Button
              onClick={toggleColorMode}
              variant="outline"
              size="icon"
              className="!border-red-200 hover:!bg-red-50 hover:!border-red-300"
            >
              {colorMode === "light" ? (
                <Moon className="!h-4 !w-4 !text-red-600" />
              ) : (
                <Sun className="!h-4 !w-4 !text-red-600" />
              )}
            </Button>
          </motion.div>

          {/* Statistics Cards */}
          <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-5 !gap-6 !mb-8">
            <StatCard icon={Droplets} label="Total blood units available" value={stats.QuantityAvailable} />
            <StatCard icon={Droplets} label="Total blood units collected" value={stats.QuantityDonated} />
            <StatCard icon={Heart} label="Total blood units distributed" value={stats.QuantityDistributed} />
            <StatCard icon={Users} label="Total donors" value={stats.TotalDonors} />
            <StatCard icon={Clock} label="Pending blood requests" value={stats.PendingRequests} />
          </div>

          {/* Charts and Data Section */}
          <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-8 !mb-8">
            {/* Blood Stock Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:!col-span-2"
            >
              <Card className="!bg-white !border-2 !border-red-100 !shadow-lg">
                <CardHeader className="!bg-gradient-to-r !from-red-600 !to-red-700 !text-white !rounded-t-lg">
                  <CardTitle className="!flex !items-center !gap-2">
                    <TrendingUp className="!h-5 !w-5" />
                    Blood Stock Levels
                  </CardTitle>
                </CardHeader>
                <CardContent className="!p-6">
                  <div className="!w-full !overflow-x-auto">
                    <LineChart
                      width={730}
                      height={250}
                      data={chartData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#fee2e2" />
                      <XAxis dataKey="type" stroke="#374151" />
                      <YAxis stroke="#374151" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#fef2f2",
                          border: "1px solid #fecaca",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="units"
                        stroke="#dc2626"
                        strokeWidth={3}
                        activeDot={{ r: 6, fill: "#dc2626" }}
                      />
                    </LineChart>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Active Blood Camps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="!bg-white !border-2 !border-red-100 !shadow-lg !h-fit">
                <CardHeader className="!bg-gradient-to-r !from-red-600 !to-red-700 !text-white !rounded-t-lg">
                  <CardTitle className="!flex !items-center !gap-2">
                    <Calendar className="!h-5 !w-5" />
                    Active Blood Camps
                  </CardTitle>
                </CardHeader>
                <CardContent className="!p-6">
                  <div className="!space-y-4">
                    {activeBloodCamps?.map((camp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="!p-4 !bg-red-50 !border !border-red-100 !rounded-lg"
                      >
                        <p className="!text-xs !text-red-600 !font-medium !mb-1">
                          {new Date(camp.StartTime).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <h3 className="!font-semibold !text-gray-900 !mb-1">{camp.Name}</h3>
                        <div className="!flex !items-center !gap-1">
                          <MapPin className="!h-3 !w-3 !text-gray-500" />
                          <p className="!text-sm !text-gray-600">{camp.Address}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Recent Donations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="!bg-white !border-2 !border-red-100 !shadow-lg">
              <CardHeader className="!bg-gradient-to-r !from-red-600 !to-red-700 !text-white !rounded-t-lg">
                <CardTitle className="!flex !items-center !gap-2">
                  <Heart className="!h-5 !w-5" />
                  Recent Donations
                </CardTitle>
              </CardHeader>
              <CardContent className="!p-6">
                <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-4">
                  {recentDonations?.map((donation, index) => (
                    <motion.div
                      key={donation.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="!p-4 !bg-red-50 !border !border-red-100 !rounded-lg hover:!shadow-md !transition-shadow !duration-200"
                    >
                      <h3 className="!font-semibold !text-gray-900 !mb-1">{donation.donor.Name}</h3>
                      <p className="!text-sm !text-gray-600 !mb-1">
                        {new Date(donation.DonationDate).toLocaleDateString()}
                      </p>
                      <p className="!text-sm !text-red-600 !font-medium">Quantity: {donation.QuantityDonated} units</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="!mt-12 !grid !grid-cols-1 md:!grid-cols-3 !gap-8"
          >
            <div className="!bg-white !border !border-red-100 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300 !rounded-lg">
              <div className="!w-12 !h-12 !bg-red-100 !flex !items-center !justify-center !mx-auto !mb-4 !rounded-full">
                <Droplets className="!h-6 !w-6 !text-red-600" />
              </div>
              <h3 className="!text-lg !font-bold !text-gray-900 !mb-2">Real-time Monitoring</h3>
              <p className="!text-sm !text-gray-600">
                Monitor blood inventory levels and donation activities in real-time with comprehensive analytics.
              </p>
            </div>

            <div className="!bg-white !border !border-red-100 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300 !rounded-lg">
              <div className="!w-12 !h-12 !bg-green-100 !flex !items-center !justify-center !mx-auto !mb-4 !rounded-full">
                <TrendingUp className="!h-6 !w-6 !text-green-600" />
              </div>
              <h3 className="!text-lg !font-bold !text-gray-900 !mb-2">Advanced Analytics</h3>
              <p className="!text-sm !text-gray-600">
                Comprehensive reporting and analytics to track donation trends and optimize operations.
              </p>
            </div>

            <div className="!bg-white !border !border-red-100 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300 !rounded-lg">
              <div className="!w-12 !h-12 !bg-blue-100 !flex !items-center !justify-center !mx-auto !mb-4 !rounded-full">
                <Users className="!h-6 !w-6 !text-blue-600" />
              </div>
              <h3 className="!text-lg !font-bold !text-gray-900 !mb-2">Donor Management</h3>
              <p className="!text-sm !text-gray-600">
                Comprehensive donor database with tracking, communication, and engagement tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
