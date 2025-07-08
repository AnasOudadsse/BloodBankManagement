"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Search, Calendar, Users, Droplets, FileText, AlertCircle, TrendingUp } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Footer from "./footer/footer"
import { Header } from "@/components/header"

const DonationListView = () => {
  const [donationsWithDonors, setDonationsWithDonors] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/donationList")
      .then((response) => {
        setDonationsWithDonors(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("There was an error fetching the donations", error)
        setLoading(false)
      })
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredDonationsWithDonors = donationsWithDonors.filter((donation) => {
    const donorCin = donation.donor?.Cin ?? ""
    const donorName = donation.donor?.Name?.toLowerCase() ?? ""
    const searchLower = searchTerm.toLowerCase()
    return donorCin.includes(searchLower) || donorName.includes(searchLower)
  })

  // Calculate statistics
  const totalDonations = donationsWithDonors.length
  const totalQuantity = donationsWithDonors.reduce((sum, donation) => sum + (donation.QuantityDonated || 0), 0)
  const recentDonations = donationsWithDonors.filter((donation) => {
    const donationDate = new Date(donation.DonationDate)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    return donationDate >= thirtyDaysAgo
  }).length

  if (loading) {
    return (
      <>
        <Header />
        <div className="!min-h-screen !bg-white !flex !items-center !justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="!h-12 !w-12 !rounded-full !border-4 !border-red-600 !border-t-transparent"
          />
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
        <div className="!absolute !bottom-20 !right-20 !w-2 !h-20 !bg-slate-100 !transform !-rotate-45" />

        <div className="!container !mx-auto !px-6 lg:!px-8 !relative !z-10">
          {/* Professional Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="!pt-20 !pb-8"
          >
            <div className="!flex !items-center !gap-3 !mb-6 !justify-center">
              <div className="!w-1 !h-8 !bg-red-600" />
              <span className="!text-sm !font-semibold !text-slate-600 !uppercase !tracking-wider">
                Blood Donation Management
              </span>
            </div>
            <h1 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !text-center">
              Donation Management
            </h1>
            <p className="!text-lg !text-slate-600 !max-w-2xl !mx-auto !text-center">
              Browse and manage all recorded donations below. Use the search bar to quickly find donations by donor's
              CIN or name.
            </p>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="!grid !grid-cols-1 md:!grid-cols-3 !gap-6 !mb-8"
          >
            <Card className="!bg-white !border-2 !border-red-200 !shadow-lg hover:!shadow-xl !transition-shadow !duration-300">
              <CardHeader className="!flex !flex-row !items-center !justify-between !space-y-0 !pb-2">
                <CardTitle className="!text-sm !font-medium !text-slate-600">Total Donations</CardTitle>
                <Droplets className="!h-4 !w-4 !text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="!text-2xl !font-bold !text-slate-900">{totalDonations}</div>
                <p className="!text-xs !text-slate-500">All recorded donations</p>
              </CardContent>
            </Card>

            <Card className="!bg-white !border-2 !border-red-200 !shadow-lg hover:!shadow-xl !transition-shadow !duration-300">
              <CardHeader className="!flex !flex-row !items-center !justify-between !space-y-0 !pb-2">
                <CardTitle className="!text-sm !font-medium !text-slate-600">Total Quantity</CardTitle>
                <TrendingUp className="!h-4 !w-4 !text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="!text-2xl !font-bold !text-slate-900">{totalQuantity} units</div>
                <p className="!text-xs !text-slate-500">Blood collected</p>
              </CardContent>
            </Card>

            <Card className="!bg-white !border-2 !border-red-200 !shadow-lg hover:!shadow-xl !transition-shadow !duration-300">
              <CardHeader className="!flex !flex-row !items-center !justify-between !space-y-0 !pb-2">
                <CardTitle className="!text-sm !font-medium !text-slate-600">Recent Donations</CardTitle>
                <Calendar className="!h-4 !w-4 !text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="!text-2xl !font-bold !text-slate-900">{recentDonations}</div>
                <p className="!text-xs !text-slate-500">Last 30 days</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Search and Table Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="!mb-20"
          >
            <Card className="!bg-white !border-2 !border-slate-200 !shadow-xl">
              {/* Search Header */}
              <CardHeader className="!bg-gradient-to-r !from-red-600 !to-red-700 !text-white !rounded-t-lg">
                <div className="!flex !items-center !gap-4">
                  <div className="!w-12 !h-12 !bg-white/20 !backdrop-blur-sm !flex !items-center !justify-center !rounded-full">
                    <Users className="!h-6 !w-6 !text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <CardTitle className="!text-xl !font-bold !text-white">Donation Records</CardTitle>
                    <p className="!text-sm !text-white/90">Search and manage donation entries</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="!p-6">
                {/* Search Bar */}
                <div className="!relative !mb-6">
                  <Search className="!absolute !left-3 !top-1/2 !transform !-translate-y-1/2 !text-slate-400 !h-4 !w-4" />
                  <Input
                    type="text"
                    placeholder="Search by CIN or Name"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="!pl-10 !bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                  />
                </div>

                {/* Table */}
                {filteredDonationsWithDonors.length === 0 ? (
                  <div className="!text-center !py-12">
                    <AlertCircle className="!h-12 !w-12 !text-slate-400 !mx-auto !mb-4" />
                    <h3 className="!text-lg !font-semibold !text-slate-900 !mb-2">No donations found</h3>
                    <p className="!text-slate-600">
                      {searchTerm ? "Try adjusting your search terms." : "No donation records available."}
                    </p>
                  </div>
                ) : (
                  <div className="!overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="!bg-slate-50">
                          <TableHead className="!font-semibold !text-slate-700">Donation ID</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Donor CIN</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Quantity Donated</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Donation Date</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredDonationsWithDonors.map((donation, index) => (
                          <motion.tr
                            key={donation.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="!border-b !border-slate-200 hover:!bg-slate-50 !transition-colors !duration-200"
                          >
                            <TableCell className="!font-medium !text-slate-900">{donation.id}</TableCell>
                            <TableCell className="!text-slate-700">{donation.donor?.Cin ?? "N/A"}</TableCell>
                            <TableCell className="!text-slate-700">{donation.QuantityDonated ?? "N/A"} units</TableCell>
                            <TableCell className="!text-slate-700">
                              {donation.DonationDate ? new Date(donation.DonationDate).toLocaleDateString() : "N/A"}
                            </TableCell>
                            <TableCell>
                              {donation.donor ? (
                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="!border-red-200 !text-red-600 hover:!bg-red-50 hover:!border-red-300 !transition-colors !duration-200"
                                >
                                  <Link to={`/addAnalysis/${donation.id}`} className="!flex !items-center !gap-2">
                                    <FileText className="!h-4 !w-4" />
                                    Add Report
                                  </Link>
                                </Button>
                              ) : (
                                <span className="!text-slate-500 !text-sm">No donor available</span>
                              )}
                            </TableCell>
                          </motion.tr>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="!max-w-6xl !mx-auto !mb-20"
          >
            <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8">
              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-red-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <Search className="!h-6 !w-6 !text-red-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Advanced Search</h3>
                <p className="!text-sm !text-slate-600">
                  Quickly find donations by donor CIN or name with real-time search functionality.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-green-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <FileText className="!h-6 !w-6 !text-green-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Report Management</h3>
                <p className="!text-sm !text-slate-600">
                  Add detailed analysis reports for each donation with comprehensive tracking.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-blue-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <TrendingUp className="!h-6 !w-6 !text-blue-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Real-time Analytics</h3>
                <p className="!text-sm !text-slate-600">
                  Monitor donation statistics and trends with live data visualization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DonationListView
