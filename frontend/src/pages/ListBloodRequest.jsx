"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { Search, Droplets, Clock, AlertTriangle, CheckCircle, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import Footer from "./footer/footer"

export function ListedBloodRequests() {
  const [BloodRequests, setBloodRequests] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const user = localStorage.getItem("user")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBloodRequests = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/getBloodRequests")
        setBloodRequests(response.data)
      } catch (err) {
        console.error("Failed to fetch blood requests", err.response?.data)
      } finally {
        setIsLoading(false)
      }
    }
    fetchBloodRequests()
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredBloodRequests = BloodRequests.filter((bloodRequest) => {
    const searchLower = searchTerm.toLowerCase()
    const bloodRequestId = String(bloodRequest.id)
    const hospitalName = bloodRequest.hospital?.Name ?? "No hospital info available"
    return bloodRequestId.includes(searchLower) || hospitalName.toLowerCase().includes(searchLower)
  })

  const deleteItem = async (id) => {
    try {
      await axios.post("http://127.0.0.1:8000/api/deleteRequest", { id })
      setBloodRequests((prev) => prev.filter((request) => request.id !== id))
      navigate("/blood-requests")
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
        return <Badge className="!bg-yellow-100 !text-yellow-800 !border-yellow-200">Pending</Badge>
      case "fulfilled":
        return <Badge className="!bg-green-100 !text-green-800 !border-green-200">Fulfilled</Badge>
      case "cancelled":
        return <Badge className="!bg-red-100 !text-red-800 !border-red-200">Cancelled</Badge>
      default:
        return <Badge className="!bg-gray-100 !text-gray-800 !border-gray-200">{status}</Badge>
    }
  }

  // Calculate statistics
  const totalRequests = BloodRequests.length
  const pendingRequests = BloodRequests.filter((req) => req.Status?.toLowerCase() === "pending").length
  const urgentRequests = BloodRequests.filter((req) => req.Urgency?.toLowerCase() === "high").length
  const totalQuantity = BloodRequests.reduce((sum, req) => sum + (req.Quantity || 0), 0)

  if (isLoading) {
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
                Blood Request Management
              </span>
            </div>
            <h1 className="!text-4xl lg:!text-5xl !font-bold !text-slate-900 !mb-4 !tracking-tight !text-center">
              Blood Request Dashboard
            </h1>
            <p className="!text-lg !text-slate-600 !max-w-2xl !mx-auto !text-center">
              Manage and respond to blood requests effectively. Search, edit, and track all blood requests in our
              comprehensive management system.
            </p>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 !gap-6 !mb-8"
          >
            <Card className="!bg-white !border-2 !border-slate-200 !shadow-lg">
              <CardContent className="!p-6">
                <div className="!flex !items-center !gap-4">
                  <div className="!w-12 !h-12 !bg-red-100 !flex !items-center !justify-center !rounded-full">
                    <Droplets className="!h-6 !w-6 !text-red-600" />
                  </div>
                  <div>
                    <p className="!text-2xl !font-bold !text-slate-900">{totalRequests}</p>
                    <p className="!text-sm !text-slate-600">Total Requests</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="!bg-white !border-2 !border-slate-200 !shadow-lg">
              <CardContent className="!p-6">
                <div className="!flex !items-center !gap-4">
                  <div className="!w-12 !h-12 !bg-yellow-100 !flex !items-center !justify-center !rounded-full">
                    <Clock className="!h-6 !w-6 !text-yellow-600" />
                  </div>
                  <div>
                    <p className="!text-2xl !font-bold !text-slate-900">{pendingRequests}</p>
                    <p className="!text-sm !text-slate-600">Pending Requests</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="!bg-white !border-2 !border-slate-200 !shadow-lg">
              <CardContent className="!p-6">
                <div className="!flex !items-center !gap-4">
                  <div className="!w-12 !h-12 !bg-red-100 !flex !items-center !justify-center !rounded-full">
                    <AlertTriangle className="!h-6 !w-6 !text-red-600" />
                  </div>
                  <div>
                    <p className="!text-2xl !font-bold !text-slate-900">{urgentRequests}</p>
                    <p className="!text-sm !text-slate-600">Urgent Requests</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="!bg-white !border-2 !border-slate-200 !shadow-lg">
              <CardContent className="!p-6">
                <div className="!flex !items-center !gap-4">
                  <div className="!w-12 !h-12 !bg-blue-100 !flex !items-center !justify-center !rounded-full">
                    <Building2 className="!h-6 !w-6 !text-blue-600" />
                  </div>
                  <div>
                    <p className="!text-2xl !font-bold !text-slate-900">{totalQuantity}</p>
                    <p className="!text-sm !text-slate-600">Total Units Requested</p>
                  </div>
                </div>
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
              <CardHeader className="!bg-gradient-to-r !from-red-600 !to-red-700 !text-white !rounded-t-lg">
                <CardTitle className="!flex !items-center !gap-3">
                  <Search className="!h-6 !w-6" />
                  Blood Request Management
                </CardTitle>
              </CardHeader>
              <CardContent className="!p-6">
                {/* Search Bar */}
                <div className="!relative !mb-6">
                  <Search className="!absolute !left-3 !top-1/2 !transform !-translate-y-1/2 !h-4 !w-4 !text-slate-400" />
                  <Input
                    type="text"
                    name="searchBar"
                    placeholder="Search by request ID or hospital name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="!pl-10 !bg-slate-50 !border-slate-200 !text-slate-900 placeholder:!text-slate-400 !h-12 focus-visible:!ring-red-500 focus-visible:!ring-offset-0 focus-visible:!border-red-500 focus:!bg-white !transition-all !duration-200"
                  />
                </div>

                {/* Table */}
                {filteredBloodRequests.length === 0 ? (
                  <div className="!text-center !py-12">
                    <Droplets className="!h-12 !w-12 !text-slate-400 !mx-auto !mb-4" />
                    <h3 className="!text-lg !font-semibold !text-slate-900 !mb-2">No blood requests found</h3>
                    <p className="!text-slate-600">
                      {searchTerm ? "Try adjusting your search terms." : "No blood requests have been submitted yet."}
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
                          <TableHead className="!font-semibold !text-slate-700">Hospital Name</TableHead>
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
                            <TableCell className="!font-medium !text-red-600">
                              {request.blood_type?.BloodType || "N/A"}
                            </TableCell>
                            <TableCell>{request.hospital?.Name ?? "No hospital info"}</TableCell>
                            <TableCell>
                              <div className="!flex !items-center !gap-2">
                                <Link to={`/editBloodRequest/${request.id}`}>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="!h-8 !w-8 !p-0 !border-blue-200 hover:!bg-blue-50 hover:!border-blue-300"
                                  >
                                    <FontAwesomeIcon icon={faEdit} className="!h-3 !w-3 !text-blue-600" />
                                  </Button>
                                </Link>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => deleteItem(request.id)}
                                  className="!h-8 !w-8 !p-0 !border-red-200 hover:!bg-red-50 hover:!border-red-300"
                                >
                                  <FontAwesomeIcon icon={faTrashAlt} className="!h-3 !w-3 !text-red-600" />
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
                  <Droplets className="!h-6 !w-6 !text-red-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Request Management</h3>
                <p className="!text-sm !text-slate-600">
                  Comprehensive blood request tracking with real-time status updates and priority management.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-green-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <CheckCircle className="!h-6 !w-6 !text-green-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Quick Actions</h3>
                <p className="!text-sm !text-slate-600">
                  Edit, delete, and manage blood requests efficiently with intuitive action controls.
                </p>
              </div>

              <div className="!bg-white !border !border-slate-200 !p-6 !text-center !shadow-sm hover:!shadow-md !transition-shadow !duration-300">
                <div className="!w-12 !h-12 !bg-purple-100 !flex !items-center !justify-center !mx-auto !mb-4">
                  <AlertTriangle className="!h-6 !w-6 !text-purple-600" />
                </div>
                <h3 className="!text-lg !font-bold !text-slate-900 !mb-2">Priority Tracking</h3>
                <p className="!text-sm !text-slate-600">
                  Advanced urgency classification and status monitoring for critical blood requests.
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
