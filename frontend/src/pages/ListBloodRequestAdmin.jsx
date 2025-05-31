"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { Search, Activity, AlertTriangle, Clock, Droplets } from "lucide-react"
import Header from "./header/header"
import Footer from "./footer/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ListedBloodRequestsAdmin() {
  const [bloodRequests, setBloodRequests] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBloodRequests() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/getBloodRequests")
        setBloodRequests(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch blood requests", err.response?.data)
        setLoading(false)
      }
    }
    fetchBloodRequests()
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredBloodRequests = bloodRequests.filter((bloodRequest) => {
    const searchLower = searchTerm.toLowerCase()
    const bloodRequestId = String(bloodRequest.id)
    const hospitalName = bloodRequest.hospital?.Name ?? "No hospital info available"
    return bloodRequestId.includes(searchLower) || hospitalName.toLowerCase().includes(searchLower)
  })

  const deleteItem = async (id) => {
    try {
      await axios.post("http://127.0.0.1:8000/api/deleteRequest", { id })
      window.location.reload()
    } catch (err) {
      console.error("Failed to delete request", err.response?.data)
    }
  }

  const getUrgencyBadge = (urgency) => {
    switch (urgency?.toLowerCase()) {
      case "high":
        return <Badge className="!bg-red-100 !text-red-800 !border-red-200">High</Badge>
      case "medium":
        return <Badge className="!bg-yellow-100 !text-yellow-800 !border-yellow-200">Medium</Badge>
      case "low":
        return <Badge className="!bg-green-100 !text-green-800 !border-green-200">Low</Badge>
      default:
        return <Badge className="!bg-gray-100 !text-gray-800 !border-gray-200">{urgency}</Badge>
    }
  }

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return <Badge className="!bg-orange-100 !text-orange-800 !border-orange-200">Pending</Badge>
      case "approved":
        return <Badge className="!bg-green-100 !text-green-800 !border-green-200">Approved</Badge>
      case "rejected":
        return <Badge className="!bg-red-100 !text-red-800 !border-red-200">Rejected</Badge>
      default:
        return <Badge className="!bg-gray-100 !text-gray-800 !border-gray-200">{status}</Badge>
    }
  }

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
                Admin Management
              </span>
            </div>
            <h1 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !text-center">
              Blood Request Management
            </h1>
            <p className="!text-lg !text-slate-600 !max-w-3xl !mx-auto !text-center">
              Comprehensive management of all blood requests. Monitor, edit, and manage requests efficiently with
              advanced search and filtering capabilities.
            </p>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="!grid !grid-cols-1 md:!grid-cols-4 !gap-6 !mb-8"
          >
            <Card className="!border-2 !border-red-200 !bg-white !shadow-lg">
              <CardHeader className="!flex !flex-row !items-center !justify-between !space-y-0 !pb-2">
                <CardTitle className="!text-sm !font-medium !text-slate-600">Total Requests</CardTitle>
                <Activity className="!h-4 !w-4 !text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="!text-2xl !font-bold !text-slate-900">{bloodRequests.length}</div>
              </CardContent>
            </Card>

            <Card className="!border-2 !border-orange-200 !bg-white !shadow-lg">
              <CardHeader className="!flex !flex-row !items-center !justify-between !space-y-0 !pb-2">
                <CardTitle className="!text-sm !font-medium !text-slate-600">Pending</CardTitle>
                <Clock className="!h-4 !w-4 !text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="!text-2xl !font-bold !text-slate-900">
                  {bloodRequests.filter((req) => req.Status?.toLowerCase() === "pending").length}
                </div>
              </CardContent>
            </Card>

            <Card className="!border-2 !border-red-200 !bg-white !shadow-lg">
              <CardHeader className="!flex !flex-row !items-center !justify-between !space-y-0 !pb-2">
                <CardTitle className="!text-sm !font-medium !text-slate-600">High Priority</CardTitle>
                <AlertTriangle className="!h-4 !w-4 !text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="!text-2xl !font-bold !text-slate-900">
                  {bloodRequests.filter((req) => req.Urgency?.toLowerCase() === "high").length}
                </div>
              </CardContent>
            </Card>

            <Card className="!border-2 !border-blue-200 !bg-white !shadow-lg">
              <CardHeader className="!flex !flex-row !items-center !justify-between !space-y-0 !pb-2">
                <CardTitle className="!text-sm !font-medium !text-slate-600">Total Units</CardTitle>
                <Droplets className="!h-4 !w-4 !text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="!text-2xl !font-bold !text-slate-900">
                  {bloodRequests.reduce((sum, req) => sum + (Number.parseInt(req.Quantity) || 0), 0)}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Search and Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="!mb-20"
          >
            <Card className="!border-2 !border-slate-200 !shadow-xl">
              <CardHeader className="!bg-gradient-to-r !from-red-600 !to-red-700 !text-white !rounded-t-lg">
                <CardTitle className="!flex !items-center !gap-2">
                  <Activity className="!h-5 !w-5" />
                  Blood Request Management
                </CardTitle>
              </CardHeader>
              <CardContent className="!p-6">
                {/* Search Bar */}
                <div className="!relative !mb-6">
                  <Search className="!absolute !left-3 !top-1/2 !transform !-translate-y-1/2 !text-slate-400 !h-4 !w-4" />
                  <Input
                    type="text"
                    placeholder="Search by request ID or hospital name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="!pl-10 !bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                  />
                </div>

                {/* Table */}
                {filteredBloodRequests.length === 0 ? (
                  <div className="!text-center !py-12">
                    <Activity className="!h-12 !w-12 !text-slate-400 !mx-auto !mb-4" />
                    <h3 className="!text-lg !font-semibold !text-slate-900 !mb-2">No requests found</h3>
                    <p className="!text-slate-600">
                      {searchTerm ? "Try adjusting your search terms." : "No blood requests available at the moment."}
                    </p>
                  </div>
                ) : (
                  <div className="!overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="!bg-slate-50">
                          <TableHead className="!font-semibold !text-slate-700">ID</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Quantity</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Urgency</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Status</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Blood Type</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Hospital</TableHead>
                          <TableHead className="!font-semibold !text-slate-700">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredBloodRequests.map((request) => (
                          <TableRow key={request.id} className="hover:!bg-slate-50 !transition-colors">
                            <TableCell className="!font-medium">{request.id}</TableCell>
                            <TableCell>{request.Quantity} units</TableCell>
                            <TableCell>{getUrgencyBadge(request.Urgency)}</TableCell>
                            <TableCell>{getStatusBadge(request.Status)}</TableCell>
                            <TableCell>
                              <Badge className="!bg-red-100 !text-red-800 !border-red-200">
                                {request.blood_type?.BloodType || "N/A"}
                              </Badge>
                            </TableCell>
                            <TableCell>{request.hospital?.Name ?? "No hospital info"}</TableCell>
                            <TableCell>
                              <div className="!flex !items-center !gap-2">
                                <Link to={`/editBloodRequeststatus/${request.id}`}>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="!h-8 !w-8 !p-0 !border-blue-200 !text-blue-600 hover:!bg-blue-50 hover:!border-blue-300"
                                  >
                                    <FontAwesomeIcon icon={faEdit} className="!h-3 !w-3" />
                                  </Button>
                                </Link>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => deleteItem(request.id)}
                                  className="!h-8 !w-8 !p-0 !border-red-200 !text-red-600 hover:!bg-red-50 hover:!border-red-300"
                                >
                                  <FontAwesomeIcon icon={faTrashAlt} className="!h-3 !w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
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
                  <Activity className="!h-6 !w-6 !text-red-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Real-time Management</h3>
                <p className="!text-sm !text-slate-600">
                  Monitor and manage blood requests in real-time with instant updates and notifications.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-orange-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <Search className="!h-6 !w-6 !text-orange-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Advanced Search</h3>
                <p className="!text-sm !text-slate-600">
                  Quickly find specific requests using powerful search and filtering capabilities.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-green-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <AlertTriangle className="!h-6 !w-6 !text-green-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Priority Management</h3>
                <p className="!text-sm !text-slate-600">
                  Efficiently manage urgent requests with priority-based sorting and alerts.
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
